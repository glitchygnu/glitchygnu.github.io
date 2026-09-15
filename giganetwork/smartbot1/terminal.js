/* =========================================================
   TERMINAL — low-level rendering primitives.

   Exposes:
     addLine({tag, text, cls, tagCls})   → creates a log line
     typeOut({tag, text, cls, tagCls}, speed)  → typewriter
     createSpinner(cfg)                  → loading spinner
     clear()                             → wipe the log
     sleep(ms)                           → promise delay
     stamp()                             → [HH:MM:SS]
     skip() / resetSkip() / isSkipping() → user skip-flag
     waitWhileSkipping(ms)               → wait that can be cut short
     on / off / emit                     → simple event bus

   Also exposed globally as `window.Terminal`.
   ========================================================= */

const Terminal = (() => {

    const logEl  = document.getElementById("log");
    const sleep  = ms => new Promise(r => setTimeout(r, ms));
    const stamp  = () => new Date().toTimeString().slice(0, 8);
    const scroll = () => { logEl.scrollTop = logEl.scrollHeight; };

    let skipFlag = false;

    /* ---------- tiny event bus ---------- */
    const handlers = {};
    function on(evt, fn) {
        (handlers[evt] ||= []).push(fn);
        return () => off(evt, fn);
    }
    function off(evt, fn) {
        if (handlers[evt]) handlers[evt] = handlers[evt].filter(f => f !== fn);
    }
    function emit(evt, data) {
        (handlers[evt] || []).forEach(fn => fn(data));
    }

    /* ---------- addLine ---------- */
    function addLine({ tag = "", text = "", cls = "", tagCls = "" } = {}) {
        const line = document.createElement("div");
        line.className = "line " + cls;

        const ts = document.createElement("span");
        ts.className = "ts";
        ts.textContent = "[" + stamp() + "]";
        line.appendChild(ts);

        if (tag) {
            const t = document.createElement("span");
            t.className = "tag " + tagCls;
            t.textContent = tag;
            line.appendChild(t);
        }

        const txt = document.createElement("span");
        txt.className = "txt";
        txt.textContent = text;
        line.appendChild(txt);

        logEl.appendChild(line);
        scroll();
        return txt;
    }

    /* ---------- inline micro-pause ---------- */
    // Freezes the current line, appends a pulsing spinner, waits for a
    // random duration (or until the user skips), then removes the spinner.
    async function inlinePause(txtEl, full, charsSoFar) {
        const mp     = CONFIG.typing.microPause;
        const frames = CONFIG.spinner.frames;
        const waitMs = mp.minWait + Math.random() * (mp.maxWait - mp.minWait);

        // Lock the visible text at what's typed so far.
        txtEl.textContent = full.slice(0, charsSoFar);

        // Append the pulsing spinner span.
        const spin = document.createElement("span");
        spin.className = "inline-spinner";
        spin.textContent = "  " + frames[0];
        txtEl.appendChild(spin);
        scroll();

        let frame = 0;
        const interval = setInterval(() => {
            frame = (frame + 1) % frames.length;
            spin.textContent = "  " + frames[frame];
        }, mp.frameInterval);

        await waitWhileSkipping(waitMs);

        clearInterval(interval);
        spin.remove();
        scroll();
    }

    /* ---------- typewriter ---------- */
    async function typeOut(opts, speed = 9) {
        const txtEl = addLine({ ...opts, text: "" });
        const full  = opts.text;
        const mp    = CONFIG.typing.microPause;

        // Per-call override: pass { microPause: false } in opts to disable.
        const usePause = mp.enabled && opts.microPause !== false;

        const pickGap = () =>
            mp.minChars + Math.floor(Math.random() * (mp.maxChars - mp.minChars + 1));

        let nextPauseAt = usePause ? pickGap() : Infinity;

        for (let i = 1; i <= full.length; i++) {
            if (skipFlag) { txtEl.textContent = full; break; }

            txtEl.textContent = full.slice(0, i);
            scroll();
            await sleep(speed);

            // Trigger a mid-typing pause when we cross the threshold,
            // but never on the very last character.
            if (usePause && i >= nextPauseAt && i < full.length) {
                await inlinePause(txtEl, full, i);

                if (skipFlag) { txtEl.textContent = full; break; }

                nextPauseAt = i + pickGap();
            }
        }
        scroll();
    }

    /* ---------- spinner (whole-line, used before responses) ---------- */
    function createSpinner(cfg) {
        const frames = cfg.frames;
        const msgs   = cfg.messages;

        const line = document.createElement("div");
        line.className = "line sys spinner-line";
        line.setAttribute("role", "status");
        line.setAttribute("aria-label", "Processing request");

        const ts = document.createElement("span");
        ts.className = "ts";
        ts.textContent = "[" + stamp() + "]";

        const tag = document.createElement("span");
        tag.className = "tag spinner-tag";
        tag.textContent = frames[0];

        const txt = document.createElement("span");
        txt.className = "txt";
        txt.textContent = msgs[0] + " ...";

        line.append(ts, tag, txt);
        logEl.appendChild(line);
        scroll();

        let f = 0;
        const spinInterval = setInterval(() => {
            f = (f + 1) % frames.length;
            tag.textContent = frames[f];
        }, cfg.frameInterval);

        let m = 0;
        const msgInterval = setInterval(() => {
            m = (m + 1) % msgs.length;
            txt.textContent = msgs[m] + " ...";
        }, cfg.messageInterval);

        return {
            element: line,
            remove() {
                clearInterval(spinInterval);
                clearInterval(msgInterval);
                line.style.opacity = "0";
                setTimeout(() => line.remove(), cfg.fadeOutMs);
            }
        };
    }

    /* ---------- utilities ---------- */
    function clear() { logEl.innerHTML = ""; }
    function skip()  { skipFlag = true; }
    function resetSkip() { skipFlag = false; }
    function isSkipping() { return skipFlag; }

    function waitWhileSkipping(ms) {
        return new Promise(resolve => {
            const start = Date.now();
            const check = () => {
                if (skipFlag || Date.now() - start >= ms) return resolve();
                setTimeout(check, 50);
            };
            check();
        });
    }

    return {
        logEl, sleep, stamp, scroll,
        addLine, typeOut, createSpinner, clear,
        skip, resetSkip, isSkipping, waitWhileSkipping,
        on, off, emit,
    };
})();

window.Terminal = Terminal;

/* =========================================================
   APP — boot sequence, input handling, command resolution,
   telemetry, and the global `Relay` API for extensions.

   Depends on (loaded before this file):
     config.js    → CONFIG
     commands.js  → commands
     terminal.js  → Terminal
   ========================================================= */

(() => {

    /* ---------- elements ---------- */
    const inputEl = document.getElementById("userInput");

    /* ---------- state ---------- */
    let busy    = false;
    let history = [];
    let histIdx = 0;

    /* ---------- apply branding from CONFIG ---------- */
    function applyBranding() {
        const b = CONFIG.branding;
        document.getElementById("brandName").innerHTML =
            b.name + '<span class="proto">' + b.proto + '</span>' + b.sub;
        document.getElementById("brandVersion").textContent = b.version;
        document.getElementById("ps1").textContent = b.prompt;
        inputEl.placeholder = b.placeholder;
    }

    /* ---------- help ---------- */
    // Dedupe by first output line so aliases collapse into one entry.
    function helpText() {
        const seen  = new Set();
        const lines = [];
        for (const c of commands) {
            const first = c.output.split("\n")[0].slice(0, 58);
            if (seen.has(first)) continue;
            seen.add(first);
            lines.push("  " + c.input.padEnd(16, " ") + "· " + first);
        }
        return "available commands (" + seen.size + ")\n" +
               lines.join("\n") +
               "\n  " + "clear".padEnd(16, " ") + "· wipe the terminal buffer";
    }

    /* ---------- command resolution ---------- */
    function resolve(raw) {
        const key = raw.toLowerCase();

        if (key === "clear") return { clear: true };
        if (key === "help")  return { text: helpText() };

        const hit = commands.find(c => c.input.toLowerCase() === key);
        if (hit) return { text: hit.output };

        return {
            text: "command not found: " + raw +
                  "\nno matching entry in local index. type 'help' for a list.",
            err: true
        };
    }

    /* ---------- main flow ---------- */
    async function sendMessage() {
        if (busy || inputEl.disabled) return;

        const raw = inputEl.value.trim();
        if (!raw) return;

        inputEl.value = "";

        history.push(raw);
        histIdx = history.length;

        Terminal.emit("command:submit", raw);

        Terminal.addLine({
            tag:   CONFIG.branding.prompt,
            tagCls:"user",
            text:  raw,
            cls:   "user"
        });

        await Terminal.sleep(CONFIG.typing.pauseAfterUser);

        const res = resolve(raw);
        Terminal.emit("command:resolve", res);

        if (res.clear) {
            Terminal.clear();
            return;
        }

        busy = true;
        inputEl.disabled = true;
        Terminal.resetSkip();

        /* ---------- loading spinner ---------- */
        const spinner = Terminal.createSpinner(CONFIG.spinner);
        const waitMs  = CONFIG.spinner.minWait +
                        Math.random() * (CONFIG.spinner.maxWait - CONFIG.spinner.minWait);

        await Terminal.waitWhileSkipping(waitMs);
        spinner.remove();
        await Terminal.sleep(80);

        /* ---------- print response ---------- */
        await Terminal.typeOut(
            {
                tag:    res.err ? "!" : "relay",
                tagCls: res.err ? "err" : "bot",
                text:   res.text,
                cls:    res.err ? "err" : "bot"
            },
            res.err ? CONFIG.typing.errorSpeed : CONFIG.typing.normalSpeed
        );

        busy = false;
        inputEl.disabled = false;
        inputEl.focus();

        Terminal.emit("command:done", res);
    }

    /* ---------- input handling ---------- */
    inputEl.addEventListener("keydown", e => {

        if (e.key === "Enter") {
            e.preventDefault();
            sendMessage();
            return;
        }

        if (e.key === "ArrowUp") {
            if (!history.length) return;
            e.preventDefault();
            histIdx = Math.max(0, histIdx - 1);
            inputEl.value = history[histIdx] ?? "";
            requestAnimationFrame(() =>
                inputEl.setSelectionRange(inputEl.value.length, inputEl.value.length)
            );
            return;
        }

        if (e.key === "ArrowDown") {
            if (!history.length) return;
            e.preventDefault();
            histIdx = Math.min(history.length, histIdx + 1);
            inputEl.value = history[histIdx] ?? "";
            return;
        }

        if (e.key === "Tab") {
            e.preventDefault();
            const partial = inputEl.value.trim().toLowerCase();
            if (!partial) return;
            const match = commands
                .map(c => c.input)
                .find(c => c.startsWith(partial));
            if (match) inputEl.value = match;
        }
    });

    // Any keypress while the relay is busy skips the current animation.
    document.addEventListener("keydown", () => { if (busy) Terminal.skip(); });

    // Click anywhere on the terminal to refocus the prompt.
    document.querySelector(".terminal").addEventListener("click", () => {
        if (!inputEl.disabled) inputEl.focus();
    });

    /* ---------- boot sequence ---------- */
    async function boot() {
        for (const line of CONFIG.boot.lines) {
            Terminal.addLine({ text: line, cls: "sys" });
            await Terminal.sleep(
                CONFIG.boot.delays.lineMin +
                Math.random() * CONFIG.boot.delays.lineJitter
            );
        }

        await Terminal.sleep(CONFIG.boot.delays.beforeWelcome);

        await Terminal.typeOut(
            {
                tag: "relay",
                tagCls: "bot",
                text: CONFIG.boot.welcome,
                cls: "bot"
            },
            CONFIG.typing.normalSpeed
        );

        inputEl.disabled = false;
        inputEl.focus();

        Terminal.emit("boot:done");
    }

    /* ---------- telemetry (footer clock + mem/cpu) ---------- */
    function startTelemetry() {
        const clockEl = document.getElementById("clock");
        const memEl   = document.getElementById("mem");
        const cpuEl   = document.getElementById("cpu");

        const tickClock = () => {
            clockEl.textContent = new Date().toTimeString().slice(0, 8);
        };
        tickClock();
        setInterval(tickClock, 1000);

        if (!CONFIG.telemetry.enabled) return;

        setInterval(() => {
            memEl.textContent = "mem " + (38 + Math.floor(Math.random() * 12)) + "%";
            cpuEl.textContent = "cpu " + (8  + Math.floor(Math.random() * 17)) + "%";
        }, CONFIG.telemetry.interval);
    }

    /* ---------- global API for future features ---------- */
    window.Relay = {
        config:   CONFIG,
        commands: commands,
        terminal: Terminal,

        // event bus
        on:  Terminal.on,
        off: Terminal.off,
        emit:Terminal.emit,

        // convenience printers
        print:    (text, cls = "sys") => Terminal.addLine({ text, cls }),
        printTag: (text, tag, cls, tagCls) => Terminal.addLine({ text, tag, cls, tagCls }),

        // exposed methods
        send:  sendMessage,
        clear: Terminal.clear,
    };

    /* ---------- go ---------- */
    applyBranding();
    startTelemetry();
    boot();

    /* =========================================================
       EXTENSION POINTS — how to add new features
       ---------------------------------------------------------
       Everything below is what future code can hook into.

       1. LISTEN TO EVENTS
          Relay.on("boot:done",      () => { ... });
          Relay.on("command:submit", raw => { ... });
          Relay.on("command:resolve", res => { ... });
          Relay.on("command:done",   res => { ... });

       2. PRINT TO THE TERMINAL
          Relay.print("hello world");                    // sys style
          Relay.print("warning", "err");                 // red
          Relay.printTag("payload ready", "[+]", "bot", "bot");

       3. REGISTER A COMMAND DYNAMICALLY
          Relay.commands.push({ input: "pingme", output: "pong" });

       4. ADD A NEW UI WINDOW / PANEL
          const win = document.createElement("div");
          win.className = "window-panel";
          win.textContent = "New window";
          document.querySelector(".workspace").appendChild(win);
          // add matching .window-panel styles in styles.css

       5. OVERRIDE CONFIG AT RUNTIME
          Relay.config.typing.normalSpeed = 3;
          Relay.config.branding.version   = "v3.2.0";
          // (some values are read at boot, so re-run branding if needed)
       ========================================================= */

})();

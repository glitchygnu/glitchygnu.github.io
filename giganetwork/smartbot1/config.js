/* =========================================================
   CONFIG — all tweakable knobs live here.
   Edit this file to change branding, boot, spinner,
   typing speed, and telemetry without touching app.js.
   ========================================================= */

const CONFIG = {

    /* ---------- branding & labels ---------- */
    branding: {
        name:        "darknet",
        proto:       "://",
        sub:         "relay",
        version:     "v3.1.7",
        prompt:      "root@darknet:~#",
        placeholder: "awaiting input...",
    },

    /* ---------- boot sequence ---------- */
    boot: {
        lines: [
            "initializing secure relay ...",
            "loading modules  [ok] netfilter  [ok] aes_gcm  [ok] tor_circuit",
            "spawning onion service ................ done",
            "handshake with guard node 45.132.8.77 .. verified",
            "deriving session key (X25519 / AES-256-GCM) .. ok",
            "indexing command aliases .............. ready",
            "WARNING: unauthorized access is monitored and logged",
            "connection established — channel is encrypted",
        ],
        welcome: "session ready. type 'help' to list available commands.",
        delays: {
            lineMin:     110,
            lineJitter:  150,
            beforeWelcome: 320,
        },
    },

    /* ---------- loading spinner ---------- */
    spinner: {
        frames: [
            "⠋","⠙","⠹","⠸","⠼","⠴","⠦","⠧","⠇","⠏"
        ],
        messages: [
            "establishing handshake",
            "routing through nodes",
            "decrypting packet",
            "receiving transmission",
            "verifying integrity",
            "flushing buffer",
        ],
        frameInterval:   80,
        messageInterval: 340,
        minWait:         500,
        maxWait:         1200,
        fadeOutMs:       140,
    },

    /* ---------- typewriter ---------- */
    typing: {
        normalSpeed:    8,
        errorSpeed:     5,
        pauseAfterUser: 180,

        /* ----- MID-TYPING MICRO-PAUSE -----
           Every N characters (N is re-rolled each time), the
           typewriter freezes and an inline spinner appears for
           a random duration before typing resumes.

           Set `enabled: false` to turn the feature off entirely.
        */
        microPause: {
            enabled:       true,
            minChars:      150,   // lower bound of the random gap
            maxChars:      170,   // upper bound of the random gap
            minWait:       1000,  // min pause duration (ms)
            maxWait:       5000,  // max pause duration (ms)
            frameInterval: 80,    // ms per spinner frame
        },
    },

    /* ---------- telemetry ---------- */
    telemetry: {
        enabled:  true,
        interval: 380,
    },
};

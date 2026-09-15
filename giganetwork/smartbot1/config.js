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
            lineMin:     110,   // min ms between boot lines
            lineJitter:  150,   // added random ms per line
            beforeWelcome: 320, // pause before welcome message
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
        frameInterval:   80,    // ms per spinner frame
        messageInterval: 340,   // ms per status message
        minWait:         500,   // min wait before response
        maxWait:         1200,  // max wait before response
        fadeOutMs:       140,   // fade-out duration on removal
    },

    /* ---------- typewriter ---------- */
    typing: {
        normalSpeed:    8,    // ms per character (normal)
        errorSpeed:     5,    // ms per character (errors)
        pauseAfterUser: 180,  // ms pause after user submits
    },

    /* ---------- telemetry ---------- */
    telemetry: {
        enabled:  true,  // set to false to freeze mem/cpu values
        interval: 380,   // ms between footer stat updates
    },
};

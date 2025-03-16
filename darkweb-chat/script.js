document.addEventListener("DOMContentLoaded", function () {
    const chatContainer = document.querySelector(".chat-container");
    const bootScreen = document.querySelector(".boot-screen");
    const chatMessages = document.getElementById("chatMessages");
    const chatInput = document.getElementById("chatInput");
    const sendButton = document.getElementById("sendButton");
    const ipDisplay = document.getElementById("ipDisplay");
    const matrixDisplay = document.getElementById("matrixDisplay");
    const codeContent = document.getElementById("codeContent");
    const inputContainer = document.querySelector(".input-container");

    // Verstecke den Chat-Bereich zu Beginn
    chatContainer.style.display = "none";
    inputContainer.style.display = "none";

    // Fake Boot-Up Code
    const bootMessages = [
        "[BOOT] Initializing kernel modules...",
        "[BOOT] Loading drivers...",
        "[NET] Connecting to TOR network...",
        "[NET] Securing encrypted tunnel...",
        "[NET] IP Spoofing enabled...",
        "[NET] Establishing anonymous connection...",
        "[SEC] Verifying network integrity...",
        "[AUTH] Access key validated...",
        "[SYS] Decrypting protected directories...",
        "[SYS] Connection established!"
    ];

    function startBootSequence() {
        let index = 0;
        const bootInterval = setInterval(() => {
            if (index < bootMessages.length) {
                bootScreen.textContent += bootMessages[index] + "\n";
                index++;
            } else {
                clearInterval(bootInterval);
                setTimeout(() => {
                    bootScreen.style.display = "none";
                    chatContainer.style.display = "block";
                    inputContainer.style.display = "flex";
                }, 1000);
            }
        }, 500);
    }

    startBootSequence();

    // Chat-Funktion
    function sendMessage() {
        const messageText = chatInput.value.trim();
        if (messageText === "") return;

        const messageElement = document.createElement("div");
        messageElement.classList.add("message");
        messageElement.textContent = `[USER-REDACTED]: ${messageText}`;

        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        chatInput.value = "";
    }

    sendButton.addEventListener("click", sendMessage);
    chatInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    // Fake IP-Generator (3 IPs wechseln sich ab)
    function updateIP() {
        let fakeIPs = [];
        for (let j = 0; j < 3; j++) {
            let fakeIP = "";
            for (let i = 0; i < 4; i++) {
                fakeIP += Math.floor(Math.random() * 256) + ".";
            }
            fakeIPs.push(fakeIP.slice(0, -1)); // Letzten Punkt entfernen
        }
        ipDisplay.textContent = `[TRACE] IP: ${fakeIPs.join(" → ")}`;
    }

    // Fake Matrix-Data
    function generateRandomMatrix() {
        let matrixData = "";
        for (let i = 0; i < 6; i++) {
            matrixData += Math.random().toString(36).substring(2, 8).toUpperCase() + " ";
        }
        return matrixData;
    }

    function updateMatrix() {
        matrixDisplay.textContent = generateRandomMatrix();
    }

    // Fake Code für den Code-Bereich
    function generateRandomCode() {
        const codeSnippets = [
            `ACCESS_GRANTED();`,
            `ENCRYPTING_PACKET();`,
            `0x${Math.random().toString(16).substring(2, 8)} EXECUTE();`,
            `LOAD_MODULE("/core/kernel.bin");`,
            `TRACE_ROUTE(${Math.floor(Math.random() * 999999)});`,
            `SYS_CALL(0x${Math.random().toString(16).substring(2, 6)});`,
            `DECRYPT_FILE("/etc/shadow");`,
            `BYPASS_FIREWALL(${Math.random().toFixed(4)}s);`,
            `0x${Math.random().toString(16).substring(2, 10)} WRITE();`
        ];
        return codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
    }

    function updateCode() {
        let fakeCode = generateRandomCode() + `\n`;
        codeContent.textContent += fakeCode;
        codeContent.scrollTop = codeContent.scrollHeight;
    }

    // Intervalle für sich ständig ändernde IPs, Matrix-Daten und Code
    setInterval(updateIP, 2000);
    setInterval(updateMatrix, 200);
    setInterval(updateCode, 100);
});

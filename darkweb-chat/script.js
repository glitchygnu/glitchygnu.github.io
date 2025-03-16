document.addEventListener("DOMContentLoaded", function () {
    const chatMessages = document.getElementById("chatMessages");
    const chatInput = document.getElementById("chatInput");
    const sendButton = document.getElementById("sendButton");
    const ipDisplay = document.getElementById("ipDisplay");
    const matrixDisplay = document.getElementById("matrixDisplay");
    const codeContent = document.getElementById("codeContent");

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

    function updateIP() {
        let fakeIP = "";
        for (let i = 0; i < 4; i++) {
            fakeIP += Math.floor(Math.random() * 256) + " ";
        }
        ipDisplay.textContent = `[TRACING] IP: ` + fakeIP.trim();
    }

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

    setInterval(updateIP, 20);
    setInterval(updateCode, 100);
});

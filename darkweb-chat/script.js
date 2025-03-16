document.addEventListener("DOMContentLoaded", function () {
    const chatMessages = document.getElementById("chatMessages");
    const chatInput = document.getElementById("chatInput");
    const sendButton = document.getElementById("sendButton");
    const ipDisplay = document.getElementById("ipDisplay");

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

    // Fake IP Generator
    function generateFakeIP() {
        return (
            Math.floor(Math.random() * 255) + "." +
            Math.floor(Math.random() * 255) + "." +
            Math.floor(Math.random() * 255) + "." +
            Math.floor(Math.random() * 255)
        );
    }

    function updateIP() {
        ipDisplay.textContent = `[TRACING] IP: ` + generateFakeIP();
    }

    setInterval(updateIP, 20);
});

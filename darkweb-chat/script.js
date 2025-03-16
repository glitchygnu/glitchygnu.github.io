document.addEventListener("DOMContentLoaded", function () {
    const chatMessages = document.getElementById("chatMessages");
    const chatInput = document.getElementById("chatInput");
    const sendButton = document.getElementById("sendButton");

    // Funktion zum Senden einer Nachricht
    function sendMessage() {
        const messageText = chatInput.value.trim();

        if (messageText === "") return;

        const messageElement = document.createElement("div");
        messageElement.classList.add("message");
        messageElement.textContent = messageText;

        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll nach unten

        chatInput.value = "";
    }

    // Klick auf den Senden-Button
    sendButton.addEventListener("click", sendMessage);

    // Nachricht mit Enter senden
    chatInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});

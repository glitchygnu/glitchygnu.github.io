// Nachrichtensystem
function sendMessage() {
    let input = document.getElementById("chatInput");
    let messageText = input.value.trim();

    if (messageText === "") return;

    let chatMessages = document.getElementById("chatMessages");
    let messageElement = document.createElement("div");

    messageElement.classList.add("message");
    messageElement.textContent = messageText;

    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-Scroll nach unten

    input.value = "";
}

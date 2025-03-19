document.addEventListener("DOMContentLoaded", () => {
    loadChatHistory();
});

function sendMessage() {
    let userInput = document.getElementById("userInput").value.trim();
    if (userInput === "") return;

    addMessageToChat("You", userInput);
    document.getElementById("userInput").value = "";

    setTimeout(() => {
        let botResponse = getBotResponse(userInput);
        addMessageToChat("Bot", botResponse);
    }, 1000);
}

function addMessageToChat(sender, message) {
    let chatHistory = document.getElementById("chatHistory");
    let messageElement = document.createElement("div");
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatHistory.appendChild(messageElement);
    chatHistory.scrollTop = chatHistory.scrollHeight;

    saveChatHistory();
}

function getBotResponse(userInput) {
    let lowerInput = userInput.toLowerCase();
    
    for (let keyword in responses) {
        if (lowerInput.includes(keyword)) {
            return responses[keyword][Math.floor(Math.random() * responses[keyword].length)];
        }
    }
    
    return "I'm not sure I understand, can you rephrase?";
}

function saveChatHistory() {
    let chatHistory = document.getElementById("chatHistory").innerHTML;
    localStorage.setItem("chatHistory", chatHistory);
}

function loadChatHistory() {
    let savedChat = localStorage.getItem("chatHistory");
    if (savedChat) {
        document.getElementById("chatHistory").innerHTML = savedChat;
    }
}

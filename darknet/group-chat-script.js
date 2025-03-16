const chatHistory = document.getElementById("chatHistory");
const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");

const maxMessages = 100000; // Max messages allowed
let messages = JSON.parse(localStorage.getItem("chatMessages")) || [];

function displayMessages() {
    chatHistory.innerHTML = "";
    messages.forEach(msgObj => {
        let div = document.createElement("div");
        div.classList.add("chat-message");

        let timeSpan = document.createElement("span");
        timeSpan.classList.add("message-time");
        timeSpan.textContent = `[${msgObj.time}] `; // Time in [HH:MM] format

        let textSpan = document.createElement("span");
        textSpan.textContent = msgObj.text;

        div.appendChild(timeSpan);
        div.appendChild(textSpan);

        chatHistory.appendChild(div);
    });

    chatHistory.scrollTop = chatHistory.scrollHeight; // Auto-scroll to latest message
}

function saveMessage() {
    const messageText = messageInput.value.trim();
    if (messageText !== "") {
        const now = new Date();
        const time = now.getHours().toString().padStart(2, "0") + ":" + now.getMinutes().toString().padStart(2, "0"); // Format HH:MM

        const messageObj = { time: time, text: messageText };

        messages.push(messageObj);
        if (messages.length > maxMessages) {
            messages.shift(); // Remove oldest message if limit is reached
        }
        localStorage.setItem("chatMessages", JSON.stringify(messages));
        displayMessages();
        messageInput.value = "";
    }
}

sendButton.addEventListener("click", saveMessage);
messageInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        saveMessage();
    }
});

displayMessages();

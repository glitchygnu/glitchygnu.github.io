// Send message with 'Enter' key
document.getElementById("message").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

document.getElementById("group-message").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendGroupMessage();
    }
});

// Simulated dark web responses
const oneToOneResponses = [
    "Anonymous: Who are you?",
    "Anonymous: Are you alone?",
    "Anonymous: I see you."
];

const groupResponses = [
    "Unknown User: Be careful what you ask.",
    "Anonymous: Trust no one.",
    "Unknown User: Leave while you can."
];

function sendMessage() {
    let messageBox = document.getElementById("chat-box");
    let input = document.getElementById("message");

    if (input.value.trim() === "") return;

    let newMessage = document.createElement("p");
    newMessage.textContent = `You: ${input.value}`;
    newMessage.style.color = "#ff00ff";

    messageBox.appendChild(newMessage);
    messageBox.scrollTop = messageBox.scrollHeight;
    
    input.value = "";

    setTimeout(() => {
        let botMessage = document.createElement("p");
        botMessage.textContent = oneToOneResponses[Math.floor(Math.random() * oneToOneResponses.length)];
        botMessage.style.color = "red";
        botMessage.style.textShadow = "0px 0px 10px red";

        messageBox.appendChild(botMessage);
        messageBox.scrollTop = messageBox.scrollHeight;
    }, Math.random() * 3000 + 1000);
}

function sendGroupMessage() {
    let messageBox = document.getElementById("group-chat-box");
    let input = document.getElementById("group-message");

    if (input.value.trim() === "") return;

    let newMessage = document.createElement("p");
    newMessage.textContent = `You: ${input.value}`;
    newMessage.style.color = "#00ffff";

    messageBox.appendChild(newMessage);
    messageBox.scrollTop = messageBox.scrollHeight;

    input.value = "";

    setTimeout(() => {
        let botMessage = document.createElement("p");
        botMessage.textContent = groupResponses[Math.floor(Math.random() * groupResponses.length)];
        botMessage.style.color = "red";
        botMessage.style.textShadow = "0px 0px 10px red";

        messageBox.appendChild(botMessage);
        messageBox.scrollTop = messageBox.scrollHeight;
    }, Math.random() * 3000 + 1000);
}

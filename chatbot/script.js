document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    let inputField = document.getElementById("user-input");
    let userText = inputField.value.trim().toLowerCase();

    if (userText === "") return;

    addMessage(userText, "user");
    inputField.value = ""; // Clear input

    setTimeout(() => {
        let response = getBotResponse(userText);
        addMessage(response, "bot");
    }, 500);
}

function addMessage(text, sender) {
    let chatBox = document.getElementById("chat-box");
    let messageDiv = document.createElement("div");
    messageDiv.classList.add("chat-message", sender);
    messageDiv.textContent = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function clearChat() {
    document.getElementById("chat-box").innerHTML = '<div class="chat-message bot">Welcome! Type a message to start.</div>';
}

function getBotResponse(input) {
    input = input.toLowerCase().trim();

    for (let topic of responses) {
        for (let pattern of topic.input) {
            if (input.includes(pattern)) { 
                return topic.output[Math.floor(Math.random() * topic.output.length)];
            }
        }
    }
    return "I'm not sure about that. Can you rephrase?";
}

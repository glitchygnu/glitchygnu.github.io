// Detect Enter key to send messages
document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

// Function to send user message
function sendMessage() {
    let inputField = document.getElementById("user-input");
    let userText = inputField.value.trim();

    if (userText === "") return; // Ignore empty messages

    addMessage(userText, "user");
    inputField.value = "";

    setTimeout(() => {
        let response = getBotResponse(userText);
        addMessage(response, "bot");
    }, 500); // Delay for better UX
}

// Function to add messages to chatbox
function addMessage(text, sender) {
    let chatBox = document.getElementById("chat-box");
    let messageDiv = document.createElement("div");
    messageDiv.classList.add("chat-message", sender);
    messageDiv.textContent = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to latest message
}

// Function to clear chat
function clearChat() {
    document.getElementById("chat-box").innerHTML = '<div class="chat-message bot">Welcome! How can I help you?</div>';
}

// Function to get a response from the bot
function getBotResponse(input) {
    input = input.toLowerCase(); // Make input case-insensitive

    let possibleResponses = [];

    // Iterate through all topics and check for matching inputs
    for (let topic of responses) {
        for (let pattern of topic.input) {
            if (input.includes(pattern)) {
                possibleResponses = topic.output;
                break; // Stop checking other inputs for this topic
            }
        }
        if (possibleResponses.length > 0) break; // Stop searching once we find a match
    }

    // Return a random response from the matched topic, or default if no match
    return possibleResponses.length > 0 
        ? possibleResponses[Math.floor(Math.random() * possibleResponses.length)] 
        : "I'm not sure about that. Can you rephrase?";
}

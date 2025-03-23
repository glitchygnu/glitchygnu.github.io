// Detect Enter key to send messages
document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

// Function to send a user message
function sendMessage() {
    let inputField = document.getElementById("user-input");
    let userText = inputField.value.trim().toLowerCase(); // Convert to lowercase and trim spaces

    if (userText === "") return; // Ignore empty messages

    addMessage(userText, "user"); // Add user's message to chat
    inputField.value = ""; // Clear input field

    setTimeout(() => {
        let response = getBotResponse(userText);
        addMessage(response, "bot"); // Add bot's response to chat
    }, 500); // Delay for better UX
}

// Function to add messages to the chatbox
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
    input = input.toLowerCase().trim(); // Normalize input

    // Iterate through all topics
    for (let topic of responses) {
        for (let pattern of topic.input) {
            if (input.includes(pattern)) { 
                return topic.output[Math.floor(Math.random() * topic.output.length)]; // Pick a random response from this topic
            }
        }
    }

    return "I'm not sure about that. Can you rephrase?"; // Default response
}

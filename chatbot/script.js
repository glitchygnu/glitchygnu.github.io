document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-btn");
    const clearButton = document.getElementById("clear-btn");

    // Ensure `responses.js` is accessible
    if (typeof responses === "undefined") {
        console.error("Error: responses.js is not loaded properly.");
        return;
    }

    // Function to add a message to the chat
    function addMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.classList.add(sender === "user" ? "user-message" : "bot-message");
        messageElement.innerText = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    // Function to process user input and get a response
    function handleUserInput() {
        let userMessage = userInput.value.toLowerCase().trim();
        if (userMessage === "") return;

        addMessage("user", userMessage);

        let response = findResponse(userMessage);
        setTimeout(() => addMessage("bot", response), 500);

        userInput.value = ""; // Clear input field
    }

    // Function to find the correct response
    function findResponse(userMessage) {
        for (let category in responses) {
            let data = responses[category];

            // Check if the user message matches any input variation
            for (let input of data.inputs) {
                if (userMessage.includes(input)) {
                    return data.outputs[Math.floor(Math.random() * data.outputs.length)];
                }
            }
        }

        // Default response if no match is found
        return "Hmm... I don't quite understand. Can you rephrase that?";
    }

    // Send message on button click or Enter key press
    sendButton.addEventListener("click", handleUserInput);
    userInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            handleUserInput();
        }
    });

    // Clear chat history
    clearButton.addEventListener("click", function () {
        chatBox.innerHTML = "";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const chatHistory = document.getElementById("chat-history");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");
    const clearButton = document.getElementById("clear-chat");

    // Load responses from external file (responses.js)
    let botResponses = {};

    // Fetch the responses file
    fetch("responses.js")
        .then(response => response.text())
        .then(text => {
            botResponses = eval(text); // Convert text to an object
        });

    // Function to add message to chat
    function addMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.classList.add(sender === "user" ? "user-message" : "bot-message");
        messageElement.innerText = message;
        chatHistory.appendChild(messageElement);
        chatHistory.scrollTop = chatHistory.scrollHeight;
    }

    // Function to handle user input
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
        for (let category in botResponses) {
            let data = botResponses[category];

            // Check if the user message matches any input variation
            for (let input of data.inputs) {
                if (userMessage.includes(input)) {
                    return data.outputs[Math.floor(Math.random() * data.outputs.length)];
                }
            }

            // Check spelling corrections
            if (category === "spelling_corrections") {
                for (let incorrect in data) {
                    if (userMessage.includes(incorrect)) {
                        userMessage = userMessage.replace(incorrect, data[incorrect]);
                        return findResponse(userMessage);
                    }
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
        chatHistory.innerHTML = "";
    });
});

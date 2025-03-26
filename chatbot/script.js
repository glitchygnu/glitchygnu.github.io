document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    let inputField = document.getElementById("user-input");
    let userText = inputField.value.trim(); // Don't lowercase here to preserve case for display

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
    const lowerInput = input.toLowerCase().trim();
    let possibleResponses = [];

    // First pass: look for exact matches in any topic
    for (let topic of responses) {
        for (let pattern of topic.input) {
            if (lowerInput.includes(pattern.toLowerCase())) {
                possibleResponses.push(...topic.output);
            }
        }
    }

    // Second pass: look for partial matches if no exact matches found
    if (possibleResponses.length === 0) {
        for (let topic of responses) {
            for (let pattern of topic.input) {
                const patternWords = pattern.toLowerCase().split(/\s+/);
                const inputWords = lowerInput.split(/\s+/);
                
                // Check if any pattern word exists in input
                if (patternWords.some(word => 
                    word.length > 3 && // Only consider words longer than 3 chars
                    inputWords.includes(word)
                )) {
                    possibleResponses.push(...topic.output);
                }
            }
        }
    }

    // Third pass: check for similar words (levenstein distance could be added here)
    if (possibleResponses.length === 0) {
        for (let topic of responses) {
            for (let pattern of topic.input) {
                const patternWords = pattern.toLowerCase().split(/\s+/);
                const inputWords = lowerInput.split(/\s+/);
                
                // Check if any input word starts with a pattern word
                if (inputWords.some(inputWord => 
                    patternWords.some(patternWord => 
                        inputWord.startsWith(patternWord) && patternWord.length > 3
                    )
                )) {
                    possibleResponses.push(...topic.output);
                }
            }
        }
    }

    // If we found matches, return a random one
    if (possibleResponses.length > 0) {
        return possibleResponses[Math.floor(Math.random() * possibleResponses.length)];
    }

    // Final fallback if nothing matches
    const fallbacks = [
        "I'm not entirely sure about that. Could you ask differently?",
        "That's an interesting point. Could you elaborate?",
        "I don't have information about that exact topic. Try asking something else!",
        "Hmm, I might need more context to answer that properly."
    ];
    return fallbacks[Math.floor(Math.random() * fallbacks.length)];
}

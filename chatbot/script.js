document.addEventListener("DOMContentLoaded", () => {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");
    const clearBtn = document.getElementById("clear-btn");

    function correctSpelling(input) {
        return input.split(" ").map(word => responses.spelling_corrections[word] || word).join(" ");
    }

    function addMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function getResponse(userText) {
        userText = correctSpelling(userText.toLowerCase().trim());

        for (let category in responses) {
            if (category !== "spelling_corrections" && responses[category].inputs.some(input => userText.includes(input))) {
                return responses[category].outputs[Math.floor(Math.random() * responses[category].outputs.length)];
            }
        }
        return "I'm not sure how to respond to that!";
    }

    sendBtn.addEventListener("click", () => {
        const userText = userInput.value;
        if (!userText) return;

        addMessage("You", userText);
        setTimeout(() => addMessage("Bot", getResponse(userText)), 500);
        userInput.value = "";
    });

    clearBtn.addEventListener("click", () => {
        chatBox.innerHTML = "";
    });

    userInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") sendBtn.click();
    });
});

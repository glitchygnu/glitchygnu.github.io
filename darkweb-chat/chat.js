document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chat-box");
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");

    // Random Usernames (for group chat)
    const users = ["Anonymous", "TheCreep", "nick", "Tut", "Persesu", "Omen", "meow"];
    function getRandomUser() {
        return users[Math.floor(Math.random() * users.length)];
    }

    function addMessage(username, text, isUser = false) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("chat-message");

        // User styling
        if (isUser) {
            messageDiv.style.color = "blue";
            username = "You";
        } else {
            messageDiv.style.color = "#222";
        }

        messageDiv.innerHTML = `<span class="username">${username}:</span> ${text}`;
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll
    }

    sendButton.addEventListener("click", function () {
        const text = messageInput.value.trim();
        if (text !== "") {
            addMessage("You", text, true);
            messageInput.value = "";

            // Simulate bot responses (random)
            setTimeout(() => {
                const botUser = getRandomUser();
                const botMessages = [
                    "I don’t trust you.",
                    "Just tell me what they are.",
                    "Yeah, let’s kill ourselves.",
                    "How are you doing rn?",
                    "Bye loser...",
                    "I am attending a christening for my niece.",
                ];
                const botResponse = botMessages[Math.floor(Math.random() * botMessages.length)];
                addMessage(botUser, botResponse);
            }, Math.random() * 3000 + 1000); // Random delay
        }
    });

    // Send message with Enter key
    messageInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendButton.click();
        }
    });
});

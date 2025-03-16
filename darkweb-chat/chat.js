document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chat-box");
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");

    // Random Users
    const users = ["Anonymous", "TheCreep", "nick", "Tut", "Persesu", "Omen", "meow", "Shadow", "RedKnight", "Cipher", "Unknown", "Watcher"];
    
    // Memory for past messages
    let chatHistory = [];

    // Large list of possible bot messages (context-based)
    const botMessages = {
        greetings: [
            "Hey.",
            "Yo.",
            "Good to see you again.",
            "What do you want?",
            "Sup?",
            "You're back?",
            "You again?"
        ],
        questions: [
            "What are you looking for?",
            "Why are you here?",
            "Tell me something interesting.",
            "Got any new info?",
            "What’s your plan?",
            "You really think you should be here?"
        ],
        dark: [
            "Some things shouldn't be asked.",
            "Not everything is for you to know.",
            "You’re in too deep.",
            "Do you even know what you're doing?",
            "You can’t trust anyone here.",
            "Someone is always watching."
        ],
        tech: [
            "Tor is acting weird today.",
            "I had to switch VPNs twice already.",
            "Anyone else having connection issues?",
            "My PGP keys got leaked, had to generate new ones.",
            "Servers are slow today.",
            "DNS spoofing is getting out of control."
        ],
        threats: [
            "Careful what you say.",
            "You're being watched.",
            "This isn’t a game.",
            "You might not like what you find.",
            "If you don’t know what you’re doing, leave."
        ],
        misc: [
            "I don't know.",
            "Try asking someone else.",
            "Not my problem.",
            "Figure it out yourself.",
            "Why would I tell you?",
            "That’s classified.",
            "I’ve heard rumors, but nothing confirmed."
        ]
    };

    // Function to get a random message from a category
    function getRandomMessage(category) {
        return botMessages[category][Math.floor(Math.random() * botMessages[category].length)];
    }

    // Function to get a user from the list
    function getRandomUser() {
        return users[Math.floor(Math.random() * users.length)];
    }

    // Function to analyze user message and generate a relevant response
    function generateBotResponse(userMessage) {
        userMessage = userMessage.toLowerCase();

        if (userMessage.includes("hello") || userMessage.includes("hi")) {
            return getRandomMessage("greetings");
        } 
        if (userMessage.includes("who are you") || userMessage.includes("what is this")) {
            return getRandomMessage("questions");
        } 
        if (userMessage.includes("danger") || userMessage.includes("illegal") || userMessage.includes("secret")) {
            return getRandomMessage("dark");
        } 
        if (userMessage.includes("vpn") || userMessage.includes("server") || userMessage.includes("tor") || userMessage.includes("pgp")) {
            return getRandomMessage("tech");
        } 
        if (userMessage.includes("tell me") || userMessage.includes("explain")) {
            return getRandomMessage("misc");
        } 
        if (userMessage.includes("help") || userMessage.includes("advice")) {
            return "No one helps here.";
        } 
        if (userMessage.includes("leave") || userMessage.includes("goodbye")) {
            return "Don’t come back.";
        }

        return getRandomMessage("misc"); // Default response
    }

    // Function to add a message to the chat
    function addMessage(username, text, isUser = false) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("chat-message");

        if (isUser) {
            messageDiv.style.color = "blue";
            username = "You";
            chatHistory.push(text); // Save message in history
        } else {
            messageDiv.style.color = "#222";
        }

        messageDiv.innerHTML = `<span class="username">${username}:</span> ${text}`;
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll
    }

    // Handle user sending a message
    sendButton.addEventListener("click", function () {
        const text = messageInput.value.trim();
        if (text !== "") {
            addMessage("You", text, true);
            messageInput.value = "";

            setTimeout(() => {
                const botUser = getRandomUser();
                const botResponse = generateBotResponse(text);
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

    // Simulate random bot messages every 10-30 seconds
    setInterval(() => {
        const randomUser = getRandomUser();
        const randomCategory = Object.keys(botMessages)[Math.floor(Math.random() * Object.keys(botMessages).length)];
        const randomMessage = getRandomMessage(randomCategory);
        addMessage(randomUser, randomMessage);
    }, Math.random() * 20000 + 10000); // Every 10-30 seconds
});

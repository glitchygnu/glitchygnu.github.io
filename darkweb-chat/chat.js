// Function to handle sending messages in one-to-one chat
function sendMessage() {
    let messageBox = document.getElementById("chat-box");
    let input = document.getElementById("message");
    
    if (input.value.trim() === "") return;

    let newMessage = document.createElement("p");
    newMessage.textContent = `You: ${input.value}`;
    newMessage.style.color = "#00ff00"; // Hacker-style green

    messageBox.appendChild(newMessage);
    messageBox.scrollTop = messageBox.scrollHeight;
    
    input.value = "";
    
    // Simulated dark web bot response (eerie effect)
    setTimeout(() => {
        let botMessage = document.createElement("p");
        botMessage.textContent = "Anonymous: Do you know what you're searching for?";
        botMessage.style.color = "red";
        botMessage.style.textShadow = "0px 0px 10px red";
        messageBox.appendChild(botMessage);
        messageBox.scrollTop = messageBox.scrollHeight;
    }, 2000);
}

// Function to handle sending messages in group chat
function sendGroupMessage() {
    let messageBox = document.getElementById("group-chat-box");
    let input = document.getElementById("group-message");

    if (input.value.trim() === "") return;

    let newMessage = document.createElement("p");
    newMessage.textContent = `You: ${input.value}`;
    newMessage.style.color = "#00ff00";

    messageBox.appendChild(newMessage);
    messageBox.scrollTop = messageBox.scrollHeight;

    input.value = "";

    // Randomized eerie group response
    setTimeout(() => {
        let responses = [
            "Unknown User: You shouldn't be here...",
            "Anonymous: They are watching...",
            "Unknown User: You don’t know what’s hidden in the shadows.",
            "Anonymous: Leave. Now."
        ];
        let botMessage = document.createElement("p");
        botMessage.textContent = responses[Math.floor(Math.random() * responses.length)];
        botMessage.style.color = "red";
        botMessage.style.textShadow = "0px 0px 10px red";

        messageBox.appendChild(botMessage);
        messageBox.scrollTop = messageBox.scrollHeight;
    }, Math.random() * 3000 + 1000);
}

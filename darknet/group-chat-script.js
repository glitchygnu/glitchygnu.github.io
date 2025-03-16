const chatHistory = document.getElementById('chat-history');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

const MAX_MESSAGES = 100000;

// Load messages from local storage
function loadMessages() {
    let messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
    messages.forEach(msg => addMessageToChat(msg));
}

// Save messages to local storage
function saveMessages(messages) {
    if (messages.length > MAX_MESSAGES) {
        messages = messages.slice(messages.length - MAX_MESSAGES); // Keep last 100,000
    }
    localStorage.setItem('chatMessages', JSON.stringify(messages));
}

// Add message to chat history
function addMessageToChat(message) {
    let messageElement = document.createElement('div');
    messageElement.classList.add('chat-message');
    messageElement.textContent = message;
    chatHistory.appendChild(messageElement);
    chatHistory.scrollTop = chatHistory.scrollHeight;
}

// Send message
sendButton.addEventListener('click', () => {
    let message = messageInput.value.trim();
    if (message.length === 0 || message.length > 1000) return; // Limit to 1000 words

    let messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
    messages.push(message);
    saveMessages(messages);

    addMessageToChat(message);
    messageInput.value = '';
});

// Load stored messages on page load
window.onload = loadMessages;

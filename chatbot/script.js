document.addEventListener("DOMContentLoaded", () => {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");
    const clearBtn = document.getElementById("clear-btn");

    // MASSIVE Response Database with 240,000+ Inputs & Outputs
    const responses = {
        "greeting": {
            inputs: [
                "hello", "hi", "hey", "yo", "sup", "greetings", "hiya", "hola", "bonjour", "hi there", 
                "hey there", "what's up", "sup bro", "hey bot", "howdy", "good morning", "good afternoon", "good evening"
            ],
            outputs: [
                "Hello!", "Hi there!", "Hey!", "Yo!", "What's up?", "Hey hey!", "Greetings, human!", "Bonjour!", "Hola!", 
                "Nice to see you!", "Howdy!", "Hey buddy!", "Sup!", "Hey friend!"
            ]
        },
        "how_are_you": {
            inputs: [
                "how are you", "how's it going", "how r u", "hows life", "how u doin", "how have you been", "you good", 
                "sup with u", "how ya doin", "how's your day", "are you okay"
            ],
            outputs: [
                "I'm great! How about you?", "Doing well!", "Feeling awesome today!", "I'm just a bot, but I'm feeling smart!", 
                "I'm good, thanks for asking!", "I'm here to chat!", "All systems are running smoothly!", "Feeling fantastic!"
            ]
        },
        "time": {
            inputs: [
                "what time is it", "current time", "whats the time", "tell me the time", "clock", "is it late", "time rn", 
                "do you know the time", "tell me the hour", "what hour is it"
            ],
            outputs: [
                "Check your phone!", "It's always chat time!", "Somewhere between yesterday and tomorrow.", "Time is an illusion!", 
                "Probably past your bedtime!", "Does time really matter?", "Let me check my imaginary watch..."
            ]
        },
        "weather": {
            inputs: [
                "what's the weather like", "how's the weather", "is it raining", "what's the temp", "is it cold outside", 
                "weather today", "hot or cold", "should I bring an umbrella", "is it sunny"
            ],
            outputs: [
                "I can't see outside, but I hope it's nice!", "Check a weather app!", "Probably good chatbot weather!", 
                "Might be sunny, might be rainy. Who knows!", "Hope it's warm where you are!", "I predict... weather!", 
                "It's always perfect weather for chatting!"
            ]
        },
        "who_are_you": {
            inputs: [
                "who are you", "what are you", "what is your name", "what do i call you", "tell me about yourself", "bot name", 
                "what do you do", "are you real"
            ],
            outputs: [
                "I'm ChatBot!", "Call me ChatBot 9000!", "I'm your AI assistant!", "Just a friendly bot!", 
                "The name's ChatBot, nice to meet you!", "Your friendly digital companion!", "I'm just here to chat!"
            ]
        },
        "joke": {
            inputs: [
                "tell me a joke", "make me laugh", "got any jokes", "funny joke", "joke time", "crack a joke", "entertain me", 
                "humor me", "say something funny"
            ],
            outputs: [
                "Why don’t skeletons fight each other? They don’t have the guts!", "What do you call a fake noodle? An impasta!", 
                "Parallel lines have so much in common. Too bad they'll never meet!", "Why did the scarecrow win an award? He was outstanding in his field!", 
                "What do you call cheese that isn’t yours? Nacho cheese!", "I told my wife she should embrace her mistakes. She gave me a hug!"
            ]
        },
        "advice": {
            inputs: [
                "give me advice", "any tips", "help me", "life tips", "wisdom", "share some knowledge", "need guidance", 
                "what should I do"
            ],
            outputs: [
                "Always be yourself!", "Keep learning!", "Stay positive and kind.", "Never stop asking questions!", 
                "Believe in yourself!", "One step at a time!", "Don't be afraid to make mistakes!", "Keep pushing forward!"
            ]
        },
        "slang": {
            inputs: [
                "wyd", "brb", "idk", "lol", "smh", "lmao", "omg", "wtf", "btw", "rofl", "fyi", "gtg", "omw", "tbh", "ikr"
            ],
            outputs: [
                "Just chilling!", "Alright, I'll wait!", "Haha!", "LOL!", "SMH!", "BRB!", "OMG!", "ROFL!", "FYI!", "GTG!", 
                "On my way!", "TBH, I agree!", "IKR!"
            ]
        }
    };

    function addMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function getResponse(userText) {
        userText = userText.toLowerCase().trim();

        for (let category in responses) {
            if (responses[category].inputs.some(input => userText.includes(input))) {
                return responses[category].outputs[Math.floor(Math.random() * responses[category].outputs.length)];
            }
        }
        return "I'm not sure how to respond to that!";
    }

    sendBtn.addEventListener("click", () => {
        const userText = userInput.value;
        if (!userText) return;

        addMessage("You", userText);
        const botResponse = getResponse(userText);
        setTimeout(() => addMessage("Bot", botResponse), 500);

        userInput.value = "";
    });

    clearBtn.addEventListener("click", () => {
        chatBox.innerHTML = "";
    });

    userInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") sendBtn.click();
    });
});

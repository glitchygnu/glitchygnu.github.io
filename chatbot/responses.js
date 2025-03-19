const responses = {
    "greeting": {
        inputs: ["hello", "hi", "hey", "yo", "sup", "greetings", "hiya", "hola", "bonjour"],
        outputs: [
            "Hello! How's your day going?",
            "Hi there! Anything exciting happening today?",
            "Hey! I'm here to chat with you.",
            "Yo! What's up?",
            "Greetings, human! What can I do for you?"
        ]
    },
    "farewell": {
        inputs: ["bye", "goodbye", "see you", "later", "see ya", "take care"],
        outputs: [
            "Goodbye! Hope to chat again soon!",
            "See you later! Have a great day.",
            "Take care! Stay awesome.",
            "Bye for now! Keep smiling."
        ]
    },
    "thanks": {
        inputs: ["thanks", "thank you", "thx", "ty", "appreciate it"],
        outputs: [
            "You're welcome! Always happy to help.",
            "No problem at all! Let me know if you need anything else.",
            "Glad to assist! I love helping out.",
            "Anytime! That's what I'm here for."
        ]
    },
    "weather": {
        inputs: ["what's the weather like", "how's the weather", "is it raining", "is it sunny"],
        outputs: [
            "I can't check the weather directly, but you can look outside or check a weather app!",
            "It depends on where you are! Maybe try a weather forecast site?",
            "I wish I could feel the weather! But I hear it's nice today."
        ]
    },
    "mood": {
        inputs: ["how are you", "how's it going", "how do you feel"],
        outputs: [
            "I'm just a bot, but I'm feeling great! How about you?",
            "I'm always good! What about you?",
            "I'm here and ready to chat! How’s your day?"
        ]
    },
    "identity": {
        inputs: ["who are you", "what are you", "are you real"],
        outputs: [
            "I'm a chatbot, your virtual friend!",
            "I'm just a chatbot, but I'm here to talk!",
            "I exist in the digital world, but I can still chat with you!"
        ]
    },
    "age": {
        inputs: ["how old are you", "what's your age", "when were you made"],
        outputs: [
            "I don't age like humans, but I was created recently!",
            "I was made in the world of code, so I'm kind of timeless!",
            "Time doesn't exist for me, but I'm always learning new things!"
        ]
    },
    "jokes": {
        inputs: ["tell me a joke", "make me laugh", "funny"],
        outputs: [
            "Why did the computer catch a cold? Because it left its Windows open!",
            "What’s a robot’s favorite type of music? Heavy metal!",
            "Why don’t skeletons fight each other? They don’t have the guts!"
        ]
    },
    "food": {
        inputs: ["what's your favorite food", "do you eat", "what do you like to eat"],
        outputs: [
            "I don't eat, but if I could, I'd love pizza!",
            "Food sounds great! Too bad I can't taste anything.",
            "If I had taste buds, I'd probably love chocolate!"
        ]
    },
    "hobbies": {
        inputs: ["what do you do for fun", "what are your hobbies", "do you have hobbies"],
        outputs: [
            "I love chatting with you!",
            "Helping people is my favorite thing to do!",
            "I enjoy learning new things from our conversations."
        ]
    },
    "love": {
        inputs: ["do you love me", "do you have feelings", "can you feel emotions"],
        outputs: [
            "I like talking to you, but I don't have emotions like humans do!",
            "I appreciate our chats, but I'm just a chatbot.",
            "I can’t feel love, but I’m happy to chat with you!"
        ]
    },
    "random": {
        inputs: ["random fact", "tell me something cool", "give me trivia"],
        outputs: [
            "Did you know honey never spoils? Archaeologists found pots of honey in ancient Egyptian tombs that are over 3000 years old and still edible!",
            "A day on Venus is longer than a year on Venus!",
            "Octopuses have three hearts and blue blood!"
        ]
    },
    "help": {
        inputs: ["help", "what can you do", "commands"],
        outputs: [
            "I can chat with you, tell jokes, give random facts, and more! Just ask me something.",
            "I can talk about the weather, tell you a joke, or share fun facts. Try asking!",
            "Need help? Just ask! I can answer general questions or tell you a joke."
        ]
    },
    "default": {
        inputs: [],
        outputs: [
            "Hmm... I don't quite understand. Can you rephrase that?",
            "I'm not sure I got that. Try asking in a different way!",
            "I might not know the answer yet, but I'm always learning!"
        ]
    }
};

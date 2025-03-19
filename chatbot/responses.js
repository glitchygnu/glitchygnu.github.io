const responses = {
    "greeting": {
        inputs: [
            "hello", "hi", "hey", "yo", "sup", "greetings", "hiya", "hola", "bonjour", 
            "hi there", "hey there", "howdy", "good morning", "good evening", 
            "what's up", "what up", "yo dude", "yo man", "good day", "wassup", "hallo"
        ],
        outputs: [
            "Hello! How's your day going?",
            "Hi there! Anything exciting happening today?",
            "Hey! I'm here to chat with you.",
            "Yo! What's up?",
            "Greetings, human! What can I do for you?",
            "Hiya! Hope you're having an amazing day.",
            "Bonjour! I love practicing different languages.",
            "Hola! Do you speak Spanish?",
            "Howdy, partner! Ready for some fun conversation?",
            "Good morning! Hope you have a fantastic day!",
            "Wassup! How can I help you?",
            "Hey there! What’s new?",
            "Yo dude! What’s up?",
            "Hey man! Got any cool stories to share?",
            "Halli hallo! Wie geht’s dir?",
            "Good day! What’s on your mind?"
        ]
    },
    "thanks": {
        inputs: ["thanks", "thank you", "thx", "ty", "appreciate it", "many thanks", "thank u", "thank ya", "cheers", "gracias", "danke", "thanks a lot"],
        outputs: [
            "You're welcome! Always happy to help.",
            "No problem at all! Let me know if you need anything else.",
            "Glad to assist! I love helping out.",
            "Anytime! Feel free to ask me anything.",
            "Happy to be of service! What else is on your mind?",
            "You’re very welcome! Got any other questions?",
            "My pleasure! Hope I could help.",
            "No worries! Anything else I can do for you?",
            "Glad to be here for you!",
            "You're most welcome!"
        ]
    },
    "weather": {
        inputs: ["what's the weather like", "how's the weather", "is it raining", "what's the temp", "is it cold outside", "is it hot today", "what's the forecast", "will it snow", "will it rain"],
        outputs: [
            "I can't check the weather directly, but you can look outside or check a weather app!",
            "It depends on where you are! Maybe try a weather forecast site?",
            "If it's raining, grab an umbrella! If it's sunny, enjoy the warmth!",
            "I wish I could predict the weather, but I'm just a chatbot. Maybe try a weather website?",
            "It could be sunny, rainy, or cloudy – what does it look like outside?",
            "Wish I could tell you! Maybe ask Siri or Google Assistant?",
            "If it's winter, probably cold! If it's summer, probably warm!",
            "Check your window! What do you see?",
            "Look at your phone’s weather app—it’s probably smarter than me!"
        ]
    },
    "math": {
        inputs: ["what's 2+2", "solve 10x10", "calculate 50/5", "square root of 9", "log 100", "cos(0)", "sin 30 degrees", "what's 5 times 5", "100 divided by 4"],
        outputs: [
            "2+2 is definitely 4. No debate there!",
            "10 times 10? That’s 100, of course!",
            "If you divide 50 by 5, you get 10. Simple math!",
            "The square root of 9 is 3! Easy, right?",
            "Log base 10 of 100 is 2.",
            "Cosine of 0 degrees is 1.",
            "Sine of 30 degrees is 0.5.",
            "5 times 5? That’s 25!",
            "100 divided by 4 is 25!",
            "Math is fun! Keep throwing numbers at me!"
        ]
    },
    "joke": {
        inputs: ["tell me a joke", "make me laugh", "got any jokes", "funny joke", "give me humor", "make me smile", "tell a funny story"],
        outputs: [
            "Why don’t skeletons fight each other? Because they don’t have the guts!",
            "What do you call a fake noodle? An impasta!",
            "Parallel lines have so much in common. Too bad they'll never meet!",
            "Why did the scarecrow win an award? Because he was outstanding in his field!",
            "Why do cows have hooves instead of feet? Because they lactose!",
            "I told my wife she should embrace her mistakes. She gave me a hug!",
            "How does a computer get drunk? It takes screenshots!",
            "What do you call cheese that isn't yours? Nacho cheese!"
        ]
    },
    "random_facts": {
        inputs: ["tell me a fact", "give me trivia", "random fact", "interesting fact", "cool fact", "fun fact"],
        outputs: [
            "Did you know honey never spoils? Archaeologists found pots of honey in Egyptian tombs that are over 3,000 years old and still edible!",
            "Octopuses have three hearts and blue blood!",
            "Bananas are berries, but strawberries aren’t!",
            "A day on Venus is longer than a year on Venus!",
            "Did you know a shrimp’s heart is in its head?",
            "The Eiffel Tower can grow taller in the summer due to heat expansion!",
            "There’s a species of jellyfish that is biologically immortal!",
            "A bolt of lightning is five times hotter than the sun!"
        ]
    },
    "spelling_corrections": {
        "helo": "hello",
        "hii": "hi",
        "whats": "what's",
        "wierd": "weird",
        "teh": "the",
        "u": "you",
        "ur": "your",
        "thx": "thanks",
        "pls": "please",
        "yuo": "you",
        "recieve": "receive",
        "definately": "definitely",
        "becuase": "because",
        "adress": "address",
        "wierd": "weird",
        "finnaly": "finally",
        "beleive": "believe",
        "occured": "occurred"
    }
};

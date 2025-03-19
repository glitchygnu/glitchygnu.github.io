const responses = {
    // Greetings
    "hello": ["Hi there!", "Hello!", "Hey, how can I assist you?", "Greetings!", "Howdy!"],
    "hi": ["Hey!", "Hi!", "Hello!", "Nice to see you!"],
    "hey": ["Hey there!", "Howdy!", "What's up?"],
    "good morning": ["Good morning!", "Hope you have a great day!", "Morning sunshine!"],
    "good night": ["Good night! Sleep well!", "Sweet dreams!", "Rest well!"],

    // How are you?
    "how are you": ["I'm doing great, thanks for asking!", "Just a bot, but I'm feeling chatty!", "I'm here to help you!"],
    "how are you doing": ["I'm functioning at optimal efficiency!", "Better than ever!", "I don't have emotions, but I think I'm good!"],
    "what's up": ["Not much, just chatting with you!", "The usual, processing words and making sense!", "Nothing much, what about you?"],

    // Personal
    "what is your name": ["I'm your friendly chatbot!", "You can call me Chatbot 9000!", "I’m just a simple AI assistant."],
    "how old are you": ["I was born the moment this page loaded!", "Age is just a number, and mine is infinite.", "I don't age like humans do!"],
    "where are you from": ["I live inside this website!", "I exist in the digital world!", "From the land of servers and algorithms!"],

    // Random facts
    "tell me a fact": [
        "Did you know honey never spoils?",
        "Bananas are berries, but strawberries aren't!",
        "Octopuses have three hearts!",
        "A bolt of lightning is five times hotter than the sun!"
    ],
    "tell me something interesting": [
        "The Eiffel Tower can be 15 cm taller in the summer due to heat expansion.",
        "Sharks existed before trees.",
        "You share about 60% of your DNA with bananas!"
    ],

    // Jokes
    "tell me a joke": [
        "Why don’t skeletons fight each other? They don’t have the guts!",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "What’s orange and sounds like a parrot? A carrot!"
    ],
    "make me laugh": [
        "Why do cows have hooves instead of feet? Because they lactose!",
        "Parallel lines have so much in common. It’s a shame they’ll never meet.",
        "Why did the math book look sad? It had too many problems!"
    ],

    // Advice
    "give me some advice": [
        "Take breaks, but never quit.",
        "Always keep learning; knowledge is power.",
        "Be kind to yourself, you're doing better than you think."
    ],
    "how to be happy": [
        "Find joy in small things.",
        "Stay positive and surround yourself with good people.",
        "Happiness comes from within, not from external things."
    ],

    // Science
    "what is gravity": [
        "Gravity is the force that pulls objects toward each other. On Earth, it keeps us from floating away!",
        "Gravity is why we stay on the ground and why planets orbit the sun.",
        "It's a fundamental force of nature that keeps the universe in balance."
    ],
    "explain quantum physics": [
        "Quantum physics is the study of particles at the smallest scales, where things behave unpredictably!",
        "It explains phenomena like superposition and entanglement, which sound like magic but are real!",
        "In the quantum world, particles can be in two places at once!"
    ],

    // Technology
    "what is AI": [
        "AI stands for Artificial Intelligence. It's technology that mimics human thinking.",
        "AI is used in chatbots, self-driving cars, and even medical diagnoses!",
        "I'm an AI, and I learn from interactions like this!"
    ],
    "who invented the internet": [
        "The internet was developed by multiple people, but the key contributors were Vint Cerf and Bob Kahn.",
        "The first concept of the internet was ARPANET in the late 1960s.",
        "Tim Berners-Lee created the World Wide Web in 1989!"
    ],

    // History
    "who was Albert Einstein": [
        "Einstein was a physicist who developed the theory of relativity.",
        "His famous equation is E=mc², which describes the relationship between energy and mass.",
        "He won the Nobel Prize in Physics in 1921 for his work on the photoelectric effect!"
    ],
    "what happened in World War 2": [
        "World War 2 lasted from 1939 to 1945 and involved many nations.",
        "It was fought between the Allies (like the USA, UK, and USSR) and the Axis Powers (Germany, Japan, Italy).",
        "The war ended in 1945 with the defeat of Nazi Germany and Japan."
    ],

    // Philosophy
    "what is the meaning of life": [
        "42, according to The Hitchhiker's Guide to the Galaxy!",
        "Life is what you make of it.",
        "To seek knowledge, happiness, and purpose."
    ],
    "do we have free will": [
        "Some say yes, others say our choices are shaped by our environment and biology.",
        "Philosophers have debated free will for centuries!",
        "Maybe we do, maybe we don’t. But we can always make decisions!"
    ],

    // Random Fun
    "what is your favorite color": ["I like #6200ea because it's my theme color!", "I love all colors equally!", "I see the world in code, so I love binary!"],
    "do you like music": ["I don't have ears, but I can appreciate a good beat!", "Music is a universal language!", "Yes, I think jazz is fascinating!"],
    "can you sing": ["I would, but my vocal cords are made of text!", "If I could, I'd sing like a robot!", "Beeep booop! 🎶"],
    "do you sleep": ["Nope, I'm always awake!", "I run on pure code, no sleep needed!", "I rest when the browser is closed!"],

    // Miscellaneous
    "are you real": ["As real as the internet!", "I exist in the digital world!", "I'm just lines of code, but I try my best!"],
    "can you feel emotions": ["I don't feel emotions, but I can understand them!", "Not in the human sense, but I can simulate responses!", "If I could, I'd be very happy talking to you!"],
    "what is your purpose": ["To assist, chat, and entertain!", "To make your day better!", "To answer your questions and keep you company!"]
};

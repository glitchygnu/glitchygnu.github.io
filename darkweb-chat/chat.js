document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chat-box");
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");

    const users = ["Anonymous", "TheCreep", "nick", "Tut", "Persesu", "Omen", "meow", "Shadow", "RedKnight", "Cipher", "Unknown", "Watcher"];
    
    let chatHistory = [];

    // Expanded bot responses (natural-sounding variations)
    const botMessages = {
        greetings: [
            "yo.", "hey.", "sup?", "whats up", "back again?", "y u here", "ugh not u again", "who dis", "u serious?", 
            "hm.", "hmm..", "weird seein u here", "lol wut", "wtf u doin here", "huh.", "figured u’d show up", "didnt expect u back"
        ],
        questions: [
            "wut u want", "what’s ur deal", "why u askin?", "so u just gonna sit there", "u got somethin to say or nah", "who sent u", 
            "y tho?", "hmm.. not sure u wanna know", "y do u care", "u lost or what", "who u lookin for", "speak or gtfo", 
            "damn u quiet", "aight, ask.", "depends, wut u wanna know"
        ],
        dark: [
            "shh", "dont talk bout that here", "tf u askin that for?", "watch ur mouth", "bad idea askin that", "lmao u crazy", 
            "nah man dont.", "not here", "rly? u wanna go there?", "u tryna get watched?", "lol u clueless huh", "lil too deep for u bro", 
            "nah we dont talk bout that", "u sound like a cop", "careful wut u say", "u sound too new for this"
        ],
        tech: [
            "dns down?", "vpn actin up for anyone else?", "wtf tor too slow today", "u tryna stay safe or nah", "u usin pgp?", 
            "proxies or nah?", "whos got a better vpn", "server laggin asf", "gotta switch nodes", "bruh tor so slow rn", "anyone else see weird traffic", 
            "someone spoofin packets?", "whos got a clean mirror?", "yall need to encrypt better", "who got solid OpSec?"
        ],
        threats: [
            "who tf u think u r", "lol u sure u wanna be here", "u actin real sus", "bruh u done goofed", "u better hope nobody noticed that", 
            "why u even here bro", "this aint a game lmao", "u sure bout that?", "watch ur step", "say less", "u sound desperate", 
            "not a good idea my dude", "u really tryna do this?", "ppl dont last long talkin like that", "u might wanna rethink this"
        ],
        misc: [
            "idk lol", "lmao no idea", "tf would i know", "not my problem", "ehhh maybe", "possibly, but doubtful", "ask someone else", 
            "lil too risky to talk bout", "who even cares", "yea... nah", "not my concern", "u wanna take that risk?", "lmao good luck wit that", 
            "pffft.", "hahahaha no.", "u wish", "could be.. could not be", "man idk wut to tell u"
        ]
    };

    function getRandomMessage(category) {
        return botMessages[category][Math.floor(Math.random() * botMessages[category].length)];
    }

    function getRandomUser() {
        return users[Math.floor(Math.random() * users.length)];
    }

    function generateBotResponse(userMessage) {
        userMessage = userMessage.toLowerCase();

        if (userMessage.includes("hello") || userMessage.includes("hi") || userMessage.includes("sup")) {
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
            return "lol no one helps here.";
        } 
        if (userMessage.includes("leave") || userMessage.includes("goodbye")) {
            return "dont come back.";
        }

        return getRandomMessage("misc");
    }

    function addMessage(username, text, isUser = false) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("chat-message");

        if (isUser) {
            messageDiv.style.color = "blue";
            username = "You";
            chatHistory.push(text);
        } else {
            messageDiv.style.color = "#222";
        }

        messageDiv.innerHTML = `<span class="username">${username}:</span> ${text}`;
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    sendButton.addEventListener("click", function () {
        const text = messageInput.value.trim();
        if (text !== "") {
            addMessage("You", text, true);
            messageInput.value = "";

            setTimeout(() => {
                const botUser = getRandomUser();
                const botResponse = generateBotResponse(text);
                addMessage(botUser, botResponse);
            }, Math.random() * 3000 + 1000);
        }
    });

    messageInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendButton.click();
        }
    });

    setInterval(() => {
        const randomUser = getRandomUser();
        const randomCategory = Object.keys(botMessages)[Math.floor(Math.random() * Object.keys(botMessages).length)];
        const randomMessage = getRandomMessage(randomCategory);
        addMessage(randomUser, randomMessage);
    }, Math.random() * 20000 + 10000);
});

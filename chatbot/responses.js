const responses = [
    {
        topic: "hello",
        input: ["hello", "hi", "hey", "heyy", "heyyy", "helloo", "hellooo", "hallo", "helo", "hullo",  
"hiya", "hai", "hay", "hii", "helo there", "hey there", "hii there", "yo", "yoo", "yooo",  
"sup", "s'up", "wazzup", "whazzup", "wassup", "waddup", "what's up", "wut's up", "whts up",  
"howdy", "howdy there", "howdy partner", "hiya there", "hey hey", "heyo", "hiyo", "hoii",  
"hey buddy", "hey pal", "hi friend", "hey mate", "yo bro", "yo dude", "hi dude", "hi bro",  
"greetings", "greetz", "salutations", "aloha", "hola", "ola", "bonjour", "ciao", "salve",  
"namaste", "shalom", "hallo there", "hallooo", "hellu", "hulloo", "hallow", "hella",  
"elloo", "eyyy", "eyup", "oy", "oi", "heyyoo", "whaddup", "wazzzupp", "g'day", "g’day mate",  
"evenin’", "mornin’", "afternoon", "evening", "yo yo", "yoyoyo", "hey ya", "hey yoo",  
"hello matey", "hiya pal", "howzit", "sup bro", "sup man", "hey sunshine", "hi sweetie",  
"hi hun", "hey love", "hello love", "hi darling", "hi cutie", "hey cutie", "yo fam",  
"hey fam", "hii bestie", "yo bestie", "hey stranger", "hi stranger", "hiya hun", "yo dude",  
"what up", "whatsuppp", "whatsup", "yello", "yellow", "yo wassup", "yo wassup bro",  
"wazaa", "wazaap", "yo wazza", "yo wazzaaa", "wattup", "wadup", "waddupp", "waddup bro",  
"yo homie", "heyy homie", "holla", "hey boo", "hey babe", "hii babe", "hello sweetheart",  
"hello baby", "yo shorty", "hii beautiful", "hii handsome", "hi gorgeous", "hi dear",  
"hello dear", "hey dear", "yo bruv", "what’s cracking", "what’s poppin", "what’s good",  
"whats cookin", "what’s shakin", "hi pumpkin", "hey sugar", "hey muffin", "hey cupcake",  
"yo yo yo", "hellooou", "heyy theree", "hiiiii", "hellooo", "hiiiiiiii", "hihi",  
"hi hi", "hiyo there", "hallo friend", "hi sunshinee", "heyyy buddy", "howdy y'all",  
"yo yo bro", "heyo fam", "sup fam", "what up dude", "hi dude", "hello champ", "hey boss",  
"yo chief", "sup captain", "heya", "heya there", "heyyyooo", "howdy doody", "hi sport",  
"yo legend", "hello superstar", "hello big guy", "hey king", "hey queen", "yo hustler",  
"yo playa", "yo baller", "hello peeps", "yo squad", "hey squad", "hello gang",  
"sup gangsta", "hey fella", "hii kiddo", "yo skater", "yo ninja", "yo gamer",  
"whatsup gamer", "yo geek", "yo nerd", "hello nerd", "hi nerd", "yo bruh", "yo sis",  
"yo cuz", "yo blood", "hi cuz", "yo kid", "hey kiddo", "sup champ", "hi champ",  
"hello sport", "hey sport", "yo genius", "yo brainiac", "hi professor", "sup Einstein",  
"hello Einstein", "yo legend", "yo hero", "hi hero", "hello legend", "yo maestro",  
"hi maestro", "yo captain", "hello commander", "yo warrior", "hi warrior",  
"hi young one", "yo traveler", "hi explorer", "hello explorer", "hello voyager",  
"yo adventurer", "hi adventurer", "g’day sport", "hi matey", "hi mate",  
"yo mate", "hello mate", "yo gov’na", "hi gov’na", "hi chief", "hello chief",  
"yo sailor", "hey sailor", "sup sailor", "hi sailor", "hello sailor",  
"hi soldier", "hello soldier", "yo soldier", "sup soldier", "hi cadet",  
"yo cadet", "sup cadet", "hello cadet", "yo scout", "hi scout", "hello scout",  
"yo ranger", "hello ranger", "hi ranger", "hey ranger", "yo officer",  
"hi officer", "hello officer", "yo sheriff", "hi sheriff", "hello sheriff",  
"hi detective", "hello detective", "yo detective", "sup detective",  
"hi doctor", "hello doctor", "yo doc", "hi doc", "sup doc", "yo medic",  
"hi medic", "hello medic", "yo surgeon", "hi surgeon", "hello surgeon",  
"yo wizard", "hi wizard", "hello wizard", "yo mage", "hi mage", "hello mage",  
"yo guru", "hi guru", "hello guru", "yo teacher", "hi teacher", "hello teacher",  
"yo sensei", "hi sensei", "hello sensei", "yo professor", "hi professor",  
"hello professor", "yo coach", "hi coach", "hello coach", "yo trainer",  
"hi trainer", "hello trainer", "yo bossman", "hi bossman", "hello bossman",  
"yo commander", "hi commander", "hello commander", "yo general", "hi general",  
"hello general", "yo pilot", "hi pilot", "hello pilot", "yo captain",  
"hi captain", "hello captain", "yo navigator", "hi navigator", "hello navigator",  
"yo engineer", "hi engineer", "hello engineer", "yo hacker", "hi hacker",  
"hello hacker", "yo techie", "hi techie", "hello techie", "yo coder",  
"hi coder", "hello coder", "yo dev", "hi dev", "hello dev", "yo artist",  
"hi artist", "hello artist", "yo musician", "hi musician", "hello musician",  
"yo drummer", "hi drummer", "hello drummer", "yo bassist", "hi bassist",  
"hello bassist", "yo guitarist", "hi guitarist", "hello guitarist",  
"yo producer", "hi producer", "hello producer", "yo DJ", "hi DJ", "hello DJ",  
"yo rapper", "hi rapper", "hello rapper", "yo singer", "hi singer",  
"hello singer", "yo actor", "hi actor", "hello actor", "yo writer",  
"hi writer", "hello writer", "yo poet", "hi poet", "hello poet",  
"yo director", "hi director", "hello director", "yo filmmaker",  
"hi filmmaker", "hello filmmaker", "yo animator", "hi animator",  
"hello animator", "yo editor", "hi editor", "hello editor"
],
        output: ["Hello!", "Hi there!", "Hey!", "Greetings!", "Salutations!", "Howdy!", "Hey hey!", "Hii!", "Yo!", "Hi friend!",  
"Hello, human!", "Hey there, user!", "Hi! How can I assist?", "Hey! Need anything?", "Greetings, earthling!",  
"Hello, world!", "Ahoy!", "Hi! What’s up?", "Hey, what’s new?", "Yo! How’s it going?",  
"Hello again!", "Long time no chat!", "Hi! What’s on your mind?", "Hey! How’s your day?",  
"Greetings, traveler!", "Hello, fellow internet user!", "Heyo!", "Hullo!", "Ello!", "Welcome back!",  
"Hi, ready to chat?", "Hey, what’s the latest?", "Hello! Need help with something?", "Hello, my friend!",  
"Hi! What’s the topic today?", "Hey! Tell me something interesting!", "Hi there, what can I do for you?",  
"Hello, at your service!", "Hi! How’s your mood today?", "Greetings, mortal!", "Hey there, need assistance?",  
"Hello! I’m all ears!", "Hi, what’s the plan?", "Hey! Got any questions?", "Hello, ready to assist!",  
"Hi there! Looking for something?", "Greetings, how can I help?", "Hey, nice to see you again!",  
"Hello! What’s on your agenda?", "Hi! Let’s chat!", "Hello! How’s everything?", "Hey! What’s good?",  
"Hi, what’s happening?", "Hey! Ready for another session?", "Hello! I’m here to help!", "Hi, how may I assist?",  
"Hey, how can I support you today?", "Greetings! What’s the mission?", "Hello, what are we up to?",  
"Hi, tell me something fun!", "Hey! Got any new ideas?", "Hi, got any projects in mind?",  
"Hello, what’s the news?", "Hey, tell me something interesting!", "Hello! I’m here and ready!",  
"Hi! What can I do for you today?", "Hello, let’s get started!", "Hey there! Need a virtual friend?",  
"Greetings, time to chat!", "Hello, what’s next?", "Hi, what’s your query?", "Hey! Let’s brainstorm!",  
"Hello! Let’s make today productive!", "Hi, feeling creative?", "Hey! What’s inspiring you today?",  
"Hello, let’s make magic happen!", "Hey! Time for some fun facts?", "Hi! Ready to learn something?",  
"Hello! I’m always here for you.", "Hey there, got a thought to share?", "Hi, let’s make this chat interesting!",  
"Hello, what shall we discuss?", "Hey, tell me a joke!", "Hi! Let’s make today awesome!",  
"Hello, thinking of something cool?", "Hi! Need a second opinion?", "Greetings, what’s your next move?",  
"Hey! What’s the question of the day?", "Hello! What’s the challenge?", "Hi, let’s solve a problem!",  
"Hey! Got something fun in mind?", "Hello, ready when you are!", "Hey! What’s the big idea?",  
"Hi, let’s talk tech!", "Hello, what’s trending today?", "Greetings, let’s chat!",  
"Hi! What’s your favorite fact?", "Hey! Let’s explore a new topic!", "Hello! I’m all ears.",  
"Hi there, how’s your brain doing today?", "Hey! Got something random to discuss?",  
"Hello! Need a suggestion?", "Hi! Let’s make today productive!", "Greetings, let’s dive in!",  
"Hey! What’s something cool you learned today?", "Hi! What’s on your to-do list?",  
"Hello! What’s your latest discovery?", "Hey! What’s your dream goal today?", "Greetings, let’s make it fun!"
]
    },
    {
        topic: "example2",
        input: ["example command", "example word"],
        output: ["example answer 1", "example answer 2"]
    },
    {
        topic: "example2",
        input: ["example command", "example word"],
        output: ["example answer 1", "example answer 2"]
    },
    {
        topic: "example1",
        input: ["example question", "example phrase"],
        output: ["example response 1", "example response 2"]
    },
    {
        topic: "example2",
        input: ["example command", "example word"],
        output: ["example answer 1", "example answer 2"]
    },
    {
        topic: "example2",
        input: ["example command", "example word"],
        output: ["example answer 1", "example answer 2"]
    },
    {
        topic: "example1",
        input: ["example question", "example phrase"],
        output: ["example response 1", "example response 2"]
    },
    {
        topic: "example2",
        input: ["example command", "example word"],
        output: ["example answer 1", "example answer 2"]
    },
    {
        topic: "example2",
        input: ["example command", "example word"],
        output: ["example answer 1", "example answer 2"]
    },
    {
        topic: "example1",
        input: ["example question", "example phrase"],
        output: ["example response 1", "example response 2"]
    },
    {
        topic: "example2",
        input: ["example command", "example word"],
        output: ["example answer 1", "example answer 2"]
    },
    {
        topic: "example2",
        input: ["example command", "example word"],
        output: ["example answer 1", "example answer 2"]
    },
    {
        topic: "example1",
        input: ["example question", "example phrase"],
        output: ["example response 1", "example response 2"]
    },
    {
        topic: "example2",
        input: ["example command", "example word"],
        output: ["example answer 1", "example answer 2"]
    },
    {
        topic: "example2",
        input: ["example command", "example word"],
        output: ["example answer 1", "example answer 2"]
    },
    {
        topic: "example1",
        input: ["example question", "example phrase"],
        output: ["example response 1", "example response 2"]
    },
    {
        topic: "example2",
        input: ["example command", "example word"],
        output: ["example answer 1", "example answer 2"]
    },
    {
        topic: "example2",
        input: ["example command", "example word"],
        output: ["example answer 1", "example answer 2"]
    },
    {
        topic: "example1",
        input: ["example question", "example phrase"],
        output: ["example response 1", "example response 2"]
    },
    {
        topic: "example2",
        input: ["example command", "example word"],
        output: ["example answer 1", "example answer 2"]
    },
    {
        topic: "example2",
        input: ["example command", "example word"],
        output: ["example answer 1", "example answer 2"]
    },
    {
        topic: "example1",
        input: ["example question", "example phrase"],
        output: ["example response 1", "example response 2"]
    },
    {
        topic: "example2",
        input: ["example command", "example word"],
        output: ["example answer 1", "example answer 2"]
    },
    {
        topic: "example2",
        input: ["example command", "example word"],
        output: ["example answer 1", "example answer 2"]
    },
];


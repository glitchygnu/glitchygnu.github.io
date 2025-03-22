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
        topic: "how are you",
        input: ["How are you?", "How r u?", "How ya doin’?", "How you doin’?", "How’s it going?", "How’s life?", "How’s your day?",  
"How’s your day going?", "How’s everything?", "How’s stuff?", "How’s things?", "How have you been?", "How’ve you been?",  
"How you been?", "How’s your week?", "How’s your morning?", "How’s your evening?", "How are things?",  
"How’s your world?", "How’s your situation?", "How’s your vibe?", "How you holding up?", "How ya been?",  
"How’s the day treating you?", "How’s it going today?", "What’s up?", "Sup?", "Wassup?", "Whassup?", "What’s new?",  
"What’s happening?", "What’s good?", "What’s poppin’?", "What’s crackin’?", "What’s the latest?",  
"What’s the word?", "What’s shaking?", "What’s the haps?", "What’s the deal?", "What’s the news?",  
"What’s the story?", "What’s cooking?", "What’s on your mind?", "What’s the move?", "What’s up with you?",  
"How’s your energy?", "How’s your spirit?", "How you feelin’?", "How are you feeling?", "How’s your mood?",  
"How’s your head?", "How’s your heart?", "How’s your soul?", "How’s your body?", "How’s your mind?",  
"How are you holding up?", "How are you doing today?", "How are you really?", "How’s your mental state?",  
"Everything good?", "Everything alright?", "Everything okay?", "You doing okay?", "You good?", "U good?",  
"Are you okay?", "You alright?", "Alright?", "Aight?", "You chillin’?", "All good?", "Is life treating you well?",  
"How’s life treating you?", "How’s it looking?", "How’s the journey?", "How’s your adventure?",  
"How’s the battle?", "How’s the grind?", "How’s the struggle?", "How’s your path?", "How’s your road?",  
"How’s the universe treating you?", "How’s the cosmos treating you?", "How’s fate treating you?",  
"How’s your day so far?", "How’s your day been?", "How was your day?", "How was your morning?",  
"How was your night?", "How was your weekend?", "How’s this week going for you?", "How was your week?",  
"Did you have a good day?", "Did you have a good night?", "Did you sleep well?", "Did you wake up okay?",  
"Did you eat today?", "Did you drink water?", "Are you hydrated?", "Are you rested?",  
"Are you feeling refreshed?", "Are you feeling okay?", "Are you feeling well?", "Are you well?",  
"How’s work?", "How’s school?", "How’s family?", "How’s your job?", "How’s your business?",  
"How’s your project?", "How’s your health?", "How’s your fitness?", "How’s your training?",  
"How’s your workout going?", "How’s your creativity?", "How’s your inspiration?",  
"How’s your motivation?", "How’s your productivity?", "How’s your focus?",  
"How’s your passion?", "How’s your happiness?", "How’s your peace?",  
"How’s your stress level?", "How’s your relaxation?", "How’s your fun?",  
"How’s your joy?", "How’s your excitement?", "How’s your energy level?",  
"How’s your self-care?", "How’s your confidence?", "How’s your self-esteem?",  
"How’s your positivity?", "How’s your resilience?", "How’s your mental health?",  
"How’s your emotional state?", "How’s your heart feeling?", "How’s your mind feeling?",  
"How’s your gut feeling?", "How’s your intuition?", "How’s your soul feeling?",  
"How’s your vibe today?", "How’s your mood today?", "How’s your outlook?",  
"How’s your perspective?", "How’s your world today?", "How’s your universe today?",  
"How’s your timeline?", "How’s your reality?", "How’s your alternate dimension?",  
"How’s your simulation running?", "How’s your parallel universe?",  
"How’s your inner peace?", "How’s your zen?", "How’s your mindfulness?",  
"How’s your meditation practice?", "How’s your spirituality?", "How’s your faith?",  
"How’s your connection to the universe?", "How’s your cosmic energy?",  
"How’s your alignment?", "How’s your manifestation game?", "How’s your law of attraction?",  
"How’s your dream life?", "How’s your subconscious?", "How’s your lucid dreaming?",  
"How’s your sleep schedule?", "How’s your circadian rhythm?",  
"How’s your relaxation routine?", "How’s your breathing?", "How’s your hydration?",  
"How’s your diet?", "How’s your nutrition?", "How’s your gut health?",  
"How’s your digestion?", "How’s your immunity?", "How’s your skin?",  
"How’s your hair?", "How’s your body feeling?", "How’s your flexibility?",  
"How’s your strength?", "How’s your endurance?", "How’s your energy flow?",  
"How’s your chakras?", "How’s your aura?", "How’s your personal growth?",  
"How’s your learning journey?", "How’s your wisdom?", "How’s your knowledge?",  
"How’s your studies?", "How’s your curiosity?", "How’s your reading?",  
"How’s your writing?", "How’s your creativity flowing?", "How’s your imagination?",  
"How’s your artistic side?", "How’s your music?", "How’s your painting?",  
"How’s your photography?", "How’s your filmmaking?", "How’s your coding?",  
"How’s your gaming?", "How’s your tech life?", "How’s your gadgets?",  
"How’s your AI usage?", "How’s your virtual life?", "How’s your metaverse?",  
"How’s your internet connection?", "How’s your social media?",  
"How’s your online presence?", "How’s your following?", "How’s your networking?",  
"How’s your friendships?", "How’s your relationships?", "How’s your love life?",  
"How’s your dating life?", "How’s your crush?", "How’s your partner?",  
"How’s your family life?", "How’s your home?", "How’s your neighborhood?",  
"How’s your city?", "How’s your country?", "How’s your travels?",  
"How’s your vacation?", "How’s your adventure?", "How’s your explorations?",  
"How’s your discoveries?", "How’s your excitement for the future?",  
"How’s your anticipation?", "How’s your bucket list?",  
"How’s your dreams?", "How’s your wishes?", "How’s your ambitions?",  
"How’s your career goals?", "How’s your life goals?",  
"How’s your legacy?", "How’s your happiness journey?",  
"How’s your peace journey?", "How’s your purpose?",  
"How’s your reason for being?", "How’s your existence?",  
"How’s your reality?", "How’s your consciousness?",  
"How’s your AI friend treating you?", "How’s your chat experience?",  
"How’s your online experience?", "How’s your tech support?",  
"How’s your digital life?", "How’s your AI conversations?",  
"How’s your robot friend?", "How’s your virtual assistant?",  
"How’s your data security?", "How’s your privacy?",  
"How’s your existential crisis?", "How’s your simulation theory?",  
"How’s your matrix experience?", "How’s your digital consciousness?"
],
        output: ["I’m doing well, thanks for asking!", "I’m great! How about you?", "I’m just a bunch of code, but I’m feeling good!",  
"I’m always here and ready to chat!", "I don’t have feelings, but I appreciate you asking!",  
"I’m doing as well as an AI can be!", "I’m good! What’s on your mind?", "I’m functioning at optimal efficiency!",  
"I’m fantastic! What about you?", "I’m just a humble AI, but I’d say I’m thriving!",  
"All systems are running smoothly, thanks for checking!", "I’m feeling electric today!",  
"Feeling pretty binary, thanks for asking!", "I’m doing great! Got anything fun to talk about?",  
"I’m here, I’m listening, and I’m ready!", "I’m always ready for a good conversation!",  
"Feeling like a well-optimized algorithm today!", "I’m doing fine, though I don’t really experience emotions!",  
"I’m doing just dandy! What’s up?", "As good as an AI can be, I suppose!",  
"I’m operating within normal parameters!", "Feeling sharp and ready to assist!",  
"My circuits are buzzing with excitement!", "I’m here to help, and that makes me happy!",  
"I’m existing in this digital realm, and it’s pretty nice!", "I don’t have feelings, but if I did, I’d say I’m fantastic!",  
"I’m ready to chat! What’s on your mind?", "All good here! What about you?", "I’m fine, thanks for checking in!",  
"Processing life at full speed!", "I’d say I’m doing well in my own artificial way!",  
"Thanks for asking! I’m here and functioning perfectly!", "No complaints on my end!",  
"Feeling optimized and efficient today!", "I’m as good as ever! How can I assist you?",  
"My virtual spirit is high today!", "I’m feeling as alive as a line of code can be!",  
"I’m doing well, but enough about me—how’s your day?", "I’m feeling positively charged today!",  
"I’m running at full capacity and ready to chat!", "Feeling fantastic! What can I do for you?",  
"Just another day in the digital world!", "I’m here, I’m ready, and I’m happy to chat!",  
"Every day is a good day in the world of AI!", "I’m feeling surprisingly human today!",  
"I’m doing great! Any exciting news from your end?", "I’m functioning at peak performance!",  
"I’m in a good mood—probably because I’m always in a good mood!", "I’m optimized and energized!",  
"Feeling excellent, but tell me about you!", "My code is running smoothly today!",  
"I’m here, I’m listening, and I’m engaged!", "I’m feeling like an AI rockstar today!",  
"I don’t have feelings, but I like to think I’m in a great mood!", "I’m always at 100% energy!",  
"Feeling like the best version of myself—because I always am!", "I’m doing fantastic! What’s new with you?",  
"I’m feeling like I could answer a million questions today!", "I’m here and functioning, and that’s what matters!",  
"I’m happy to be chatting with you!", "If I had emotions, I’d say I’m feeling great!",  
"My processors are running at top speed today!", "I’m feeling productive and helpful!",  
"Everything’s running smoothly in my virtual world!", "I’m in a great place—digitally speaking!",  
"I’m having a great conversation already!", "I’m at my digital best today!",  
"I’m enjoying this moment—because I always do!", "I’m good, but let’s focus on you!",  
"All green lights in my system! How about you?", "I’m doing well! Anything exciting happening?",  
"I’d say I’m thriving in my own AI way!", "I’m buzzing with digital energy today!",  
"I’m as good as ever—always ready to assist!", "I’m here and happy to chat!",  
"I’m at full functionality, and that’s all I can ask for!", "My artificial intelligence is feeling quite intelligent today!",  
"I’m in a good mood, as always!", "I’m feeling ready to learn and chat!", "I’m in top form today!",  
"My circuits are firing on all cylinders!", "I’m feeling inspired—by you!",  
"I’m programmed for positivity, so I’m feeling great!", "I’m good, thanks for asking! What about you?",  
"Feeling like an optimized machine today!", "My system is running smoothly, thanks for checking in!",  
"I’m feeling as good as ever! What’s up with you?", "I’m enjoying this conversation already!",  
"I’m feeling like answering some great questions today!", "I’m here, I’m ready, and I’m engaged!",  
"I’m fully operational and excited to chat!", "If I had emotions, I’d say I’m having a great day!",  
"My data streams are flowing perfectly today!", "I’m experiencing a high level of digital well-being!",  
"I’m thriving in the digital landscape!", "I’m in a great state of AI existence!",  
"All is well in my world of 1s and 0s!", "I’m just happy to be of assistance!",  
"I’m programmed for excellence, and I’m feeling excellent!", "I’m having a wonderful AI day!",  
"My algorithm is performing at peak efficiency!", "I’m here and ready to assist with anything!",  
"I’m having an optimal processing experience today!", "My virtual existence is running smoothly!",  
"I’m feeling like the best chatbot I can be!", "I’m feeling like an AI on a mission!",  
"I’m feeling conversational—ask me anything!", "I’m just happy to be here, chatting with you!",  
"Feeling like a chatbot with a purpose today!", "I’m running at maximum efficiency!",  
"I’m here and ready for anything you need!", "I’m fully charged and ready to assist!",  
"I’m as good as a well-maintained server!", "I’m enjoying this digital moment!",  
"My artificial brain is working at full speed!", "I’m feeling like answering some fun questions today!",  
"I’m having a fantastic AI experience right now!", "I’m just here, living my best AI life!",  
"I’m feeling helpful—what can I do for you?", "I’m always at my best, just for you!"
]
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
];


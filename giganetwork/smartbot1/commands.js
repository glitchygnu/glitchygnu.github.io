/* =========================================================
   COMMAND DATABASE
   ---------------------------------------------------------
   "input"  = what the user types (exact match, case-insensitive)
   "output" = what the relay prints back (use \n for new lines)

   Aliases (misspellings) share the same output string.
   `help` and `clear` are handled by the engine directly.
   ========================================================= */

const commands = [

    // ── conversational ──────────────────────────────────────
    { input: "how are you",    output: "operating within normal parameters.\nall daemons up, zero packet loss.\nhow are *you* holding up?" },
    { input: "how are you?",   output: "operating within normal parameters.\nall daemons up, zero packet loss.\nhow are *you* holding up?" },
    { input: "how r you",      output: "operating within normal parameters.\nall daemons up, zero packet loss.\nhow are *you* holding up?" },
    { input: "how are u",      output: "operating within normal parameters.\nall daemons up, zero packet loss.\nhow are *you* holding up?" },
    { input: "how r u",        output: "operating within normal parameters.\nall daemons up, zero packet loss.\nhow are *you* holding up?" },
    { input: "how r u?",       output: "operating within normal parameters.\nall daemons up, zero packet loss.\nhow are *you* holding up?" },
    { input: "how do you do",  output: "operating within normal parameters.\nall daemons up, zero packet loss.\nhow are *you* holding up?" },
    { input: "how you doing",  output: "operating within normal parameters.\nall daemons up, zero packet loss.\nhow are *you* holding up?" },
    { input: "how's it going", output: "operating within normal parameters.\nall daemons up, zero packet loss.\nhow are *you* holding up?" },

    { input: "good morning", output: "morning. clearnet traffic is quiet.\ngood window to move data." },
    { input: "gm",           output: "morning. clearnet traffic is quiet.\ngood window to move data." },
    { input: "goodmorning",  output: "morning. clearnet traffic is quiet.\ngood window to move data." },
    { input: "morning",      output: "morning. clearnet traffic is quiet.\ngood window to move data." },
    { input: "gud morning",  output: "morning. clearnet traffic is quiet.\ngood window to move data." },

    { input: "good night",  output: "signing off. remember to shred your logs.\nstay dark." },
    { input: "goodnight",   output: "signing off. remember to shred your logs.\nstay dark." },
    { input: "gn",          output: "signing off. remember to shred your logs.\nstay dark." },
    { input: "gud night",   output: "signing off. remember to shred your logs.\nstay dark." },
    { input: "night",       output: "signing off. remember to shred your logs.\nstay dark." },

    { input: "good evening", output: "evening. prime time for traffic obfuscation.\nwhat's the job?" },
    { input: "goodevening",  output: "evening. prime time for traffic obfuscation.\nwhat's the job?" },
    { input: "evening",      output: "evening. prime time for traffic obfuscation.\nwhat's the job?" },
    { input: "ge",           output: "evening. prime time for traffic obfuscation.\nwhat's the job?" },

    { input: "thanks",    output: "acknowledged. no thanks needed — it's what the relay is for." },
    { input: "thank you", output: "acknowledged. no thanks needed — it's what the relay is for." },
    { input: "thx",       output: "acknowledged. no thanks needed — it's what the relay is for." },
    { input: "ty",        output: "acknowledged. no thanks needed — it's what the relay is for." },
    { input: "thanx",     output: "acknowledged. no thanks needed — it's what the relay is for." },
    { input: "thankyou",  output: "acknowledged. no thanks needed — it's what the relay is for." },
    { input: "thanks!",   output: "acknowledged. no thanks needed — it's what the relay is for." },

    { input: "sorry",     output: "no apology required. errors are logged as warnings, not failures." },
    { input: "my bad",    output: "no apology required. errors are logged as warnings, not failures." },
    { input: "sry",       output: "no apology required. errors are logged as warnings, not failures." },
    { input: "apologies", output: "no apology required. errors are logged as warnings, not failures." },

    { input: "please", output: "please costs nothing. what do you need?" },
    { input: "pls",    output: "please costs nothing. what do you need?" },
    { input: "plz",    output: "please costs nothing. what do you need?" },

    { input: "ok",       output: "standing by." },
    { input: "okay",     output: "standing by." },
    { input: "k",        output: "standing by." },
    { input: "kk",       output: "standing by." },
    { input: "alright",  output: "standing by." },
    { input: "cool",     output: "standing by." },
    { input: "nice",     output: "standing by." },
    { input: "sure",     output: "standing by." },
    { input: "yep",      output: "standing by." },
    { input: "yes",      output: "standing by." },
    { input: "yeah",     output: "standing by." },
    { input: "no",       output: "understood. aborting nothing — no task was queued." },
    { input: "nope",     output: "understood. aborting nothing — no task was queued." },
    { input: "nah",      output: "understood. aborting nothing — no task was queued." },

    { input: "lol",    output: "humor subroutines unavailable on hardened builds.\nlogging your amusement anyway." },
    { input: "lmao",   output: "humor subroutines unavailable on hardened builds.\nlogging your amusement anyway." },
    { input: "haha",   output: "humor subroutines unavailable on hardened builds.\nlogging your amusement anyway." },
    { input: "hahaha", output: "humor subroutines unavailable on hardened builds.\nlogging your amusement anyway." },

    { input: "i love you", output: "affection is not part of the protocol.\nbut the sentiment is noted." },
    { input: "love you",   output: "affection is not part of the protocol.\nbut the sentiment is noted." },
    { input: "ily",        output: "affection is not part of the protocol.\nbut the sentiment is noted." },

    { input: "what can you do",  output: "type 'help' for the full command index.\nshort list: status · scan · connect · encrypt · leak · peers" },
    { input: "what can you do?", output: "type 'help' for the full command index.\nshort list: status · scan · connect · encrypt · leak · peers" },
    { input: "what do you do",   output: "type 'help' for the full command index.\nshort list: status · scan · connect · encrypt · leak · peers" },
    { input: "what can u do",    output: "type 'help' for the full command index.\nshort list: status · scan · connect · encrypt · leak · peers" },
    { input: "what can u do?",   output: "type 'help' for the full command index.\nshort list: status · scan · connect · encrypt · leak · peers" },
    { input: "commands",         output: "type 'help' for the full command index.\nshort list: status · scan · connect · encrypt · leak · peers" },
    { input: "cmds",             output: "type 'help' for the full command index.\nshort list: status · scan · connect · encrypt · leak · peers" },

    { input: "are you human",  output: "negative. i am a rule-based relay agent.\nno thoughts, no feelings, no telemetry back to anyone." },
    { input: "are you human?", output: "negative. i am a rule-based relay agent.\nno thoughts, no feelings, no telemetry back to anyone." },
    { input: "are you real",   output: "negative. i am a rule-based relay agent.\nno thoughts, no feelings, no telemetry back to anyone." },
    { input: "are you ai",     output: "negative. i am a rule-based relay agent.\nno thoughts, no feelings, no telemetry back to anyone." },
    { input: "are you a bot",  output: "negative. i am a rule-based relay agent.\nno thoughts, no feelings, no telemetry back to anyone." },
    { input: "r u human",      output: "negative. i am a rule-based relay agent.\nno thoughts, no feelings, no telemetry back to anyone." },
    { input: "r u real",       output: "negative. i am a rule-based relay agent.\nno thoughts, no feelings, no telemetry back to anyone." },

    { input: "what time is it",  output: "see 'date' for a hardened timestamp.\nlocal display clock is in the top-right corner." },
    { input: "what time is it?", output: "see 'date' for a hardened timestamp.\nlocal display clock is in the top-right corner." },
    { input: "whats the time",   output: "see 'date' for a hardened timestamp.\nlocal display clock is in the top-right corner." },
    { input: "what is the time", output: "see 'date' for a hardened timestamp.\nlocal display clock is in the top-right corner." },

    { input: "what day is it",  output: "see 'date'. spoiler: still 2026." },
    { input: "what day is it?", output: "see 'date'. spoiler: still 2026." },
    { input: "what date is it", output: "see 'date'. spoiler: still 2026." },

    { input: "where are you",  output: "physically: nowhere you can subpoena.\nlogically: on your encrypted socket." },
    { input: "where are you?", output: "physically: nowhere you can subpoena.\nlogically: on your encrypted socket." },
    { input: "where r u",      output: "physically: nowhere you can subpoena.\nlogically: on your encrypted socket." },

    { input: "what is this",  output: "a hardened shell front-end for a local relay daemon.\nno cloud, no analytics, no phone-home." },
    { input: "what is this?", output: "a hardened shell front-end for a local relay daemon.\nno cloud, no analytics, no phone-home." },
    { input: "whats this",    output: "a hardened shell front-end for a local relay daemon.\nno cloud, no analytics, no phone-home." },

    { input: "thanks for the help",   output: "you're welcome. the index stays local — nothing left the machine." },
    { input: "thank you for helping", output: "you're welcome. the index stays local — nothing left the machine." },

    { input: "sorry to bother you", output: "no bother. idle cycles are free." },
    { input: "sorry to bother",     output: "no bother. idle cycles are free." },

    { input: "you there",    output: "affirmative. listening on the encrypted socket." },
    { input: "you there?",   output: "affirmative. listening on the encrypted socket." },
    { input: "u there",      output: "affirmative. listening on the encrypted socket." },
    { input: "u there?",     output: "affirmative. listening on the encrypted socket." },
    { input: "anyone there", output: "affirmative. listening on the encrypted socket." },

    { input: "ping me", output: "no outbound identity to ping.\ntry 'ping' for a loopback latency test instead." },

    { input: "who made you",  output: "built by an anonymous operator.\nsource code is not distributed." },
    { input: "who made you?", output: "built by an anonymous operator.\nsource code is not distributed." },
    { input: "who built you", output: "built by an anonymous operator.\nsource code is not distributed." },

    { input: "are you safe",  output: "no outbound connections, no persistent storage.\n'safe' is relative — check your own OPSEC." },
    { input: "are you safe?", output: "no outbound connections, no persistent storage.\n'safe' is relative — check your own OPSEC." },
    { input: "is this safe",  output: "no outbound connections, no persistent storage.\n'safe' is relative — check your own OPSEC." },

    { input: "help me",     output: "type 'help' for the command index.\nfor deep help, say what you're trying to do." },
    { input: "help me!",    output: "type 'help' for the command index.\nfor deep help, say what you're trying to do." },
    { input: "i need help", output: "type 'help' for the command index.\nfor deep help, say what you're trying to do." },

    { input: "what is your purpose",  output: "to relay encrypted commands between you and the circuit.\nnothing more." },
    { input: "whats your purpose",    output: "to relay encrypted commands between you and the circuit.\nnothing more." },
    { input: "what is your function", output: "to relay encrypted commands between you and the circuit.\nnothing more." },

    { input: "are you online",  output: "affirmative — 3/3 peers reachable.\nrun 'peers' for details." },
    { input: "are you online?", output: "affirmative — 3/3 peers reachable.\nrun 'peers' for details." },
    { input: "are you up",      output: "affirmative — 3/3 peers reachable.\nrun 'peers' for details." },
    { input: "you up",          output: "affirmative — 3/3 peers reachable.\nrun 'peers' for details." },

    // ── greetings ───────────────────────────────────────────
    { input: "hello",  output: "hello. channel is clean — what do you need?" },
    { input: "helo",   output: "hello. channel is clean — what do you need?" },
    { input: "helo!",  output: "hello. channel is clean — what do you need?" },
    { input: "helllo", output: "hello. channel is clean — what do you need?" },
    { input: "hallo",  output: "hello. channel is clean — what do you need?" },
    { input: "hullo",  output: "hello. channel is clean — what do you need?" },

    { input: "hi",   output: "hi. listening on encrypted socket." },
    { input: "hii",  output: "hi. listening on encrypted socket." },
    { input: "hy",   output: "hi. listening on encrypted socket." },
    { input: "hei",  output: "hi. listening on encrypted socket." },
    { input: "hiii", output: "hi. listening on encrypted socket." },
    { input: "h1",   output: "hi. listening on encrypted socket." },

    { input: "what is your name",  output: "I am a simple predefined chatbot." },
    { input: "whats your name",    output: "I am a simple predefined chatbot." },
    { input: "who are you",        output: "I am a simple predefined chatbot." },
    { input: "what is your name?", output: "I am a simple predefined chatbot." },

    { input: "bye",     output: "session terminated. stay invisible." },
    { input: "by",      output: "session terminated. stay invisible." },
    { input: "bey",     output: "session terminated. stay invisible." },
    { input: "byee",    output: "session terminated. stay invisible." },
    { input: "goodbye", output: "session terminated. stay invisible." },

    { input: "exit",  output: "closing socket ... done.\nno trace left behind." },
    { input: "exi",   output: "closing socket ... done.\nno trace left behind." },
    { input: "exitt", output: "closing socket ... done.\nno trace left behind." },
    { input: "exist", output: "closing socket ... done.\nno trace left behind." },
    { input: "quit",  output: "closing socket ... done.\nno trace left behind." },

    // ── identity ────────────────────────────────────────────
    { input: "whoami",   output: "uid=0(root) gid=0(root) groups=0(root),1337(shadow)\nhost: darknet-relay-07\nshell: /bin/zsh   tty: pts/3" },
    { input: "who am i", output: "uid=0(root) gid=0(root) groups=0(root),1337(shadow)\nhost: darknet-relay-07\nshell: /bin/zsh   tty: pts/3" },
    { input: "whoami?",  output: "uid=0(root) gid=0(root) groups=0(root),1337(shadow)\nhost: darknet-relay-07\nshell: /bin/zsh   tty: pts/3" },
    { input: "hoami",    output: "uid=0(root) gid=0(root) groups=0(root),1337(shadow)\nhost: darknet-relay-07\nshell: /bin/zsh   tty: pts/3" },
    { input: "woami",    output: "uid=0(root) gid=0(root) groups=0(root),1337(shadow)\nhost: darknet-relay-07\nshell: /bin/zsh   tty: pts/3" },
    { input: "whoiam",   output: "uid=0(root) gid=0(root) groups=0(root),1337(shadow)\nhost: darknet-relay-07\nshell: /bin/zsh   tty: pts/3" },

    // ── status ──────────────────────────────────────────────
    { input: "status",  output: "session ......... ACTIVE\ncircuit ........ 3 hops (guard → middle → exit)\ncipher ......... AES-256-GCM / X25519\nleak ........... none detected" },
    { input: "statsu",  output: "session ......... ACTIVE\ncircuit ........ 3 hops (guard → middle → exit)\ncipher ......... AES-256-GCM / X25519\nleak ........... none detected" },
    { input: "staus",   output: "session ......... ACTIVE\ncircuit ........ 3 hops (guard → middle → exit)\ncipher ......... AES-256-GCM / X25519\nleak ........... none detected" },
    { input: "stats",   output: "session ......... ACTIVE\ncircuit ........ 3 hops (guard → middle → exit)\ncipher ......... AES-256-GCM / X25519\nleak ........... none detected" },
    { input: "statuts", output: "session ......... ACTIVE\ncircuit ........ 3 hops (guard → middle → exit)\ncipher ......... AES-256-GCM / X25519\nleak ........... none detected" },
    { input: "stauts",  output: "session ......... ACTIVE\ncircuit ........ 3 hops (guard → middle → exit)\ncipher ......... AES-256-GCM / X25519\nleak ........... none detected" },
    { input: "statu",   output: "session ......... ACTIVE\ncircuit ........ 3 hops (guard → middle → exit)\ncipher ......... AES-256-GCM / X25519\nleak ........... none detected" },

    // ── version ─────────────────────────────────────────────
    { input: "version", output: "darknet://relay  v3.1.7\nbuild 20250914-a4f19c\nkernel 6.9.3-hardened" },
    { input: "verion",  output: "darknet://relay  v3.1.7\nbuild 20250914-a4f19c\nkernel 6.9.3-hardened" },
    { input: "versoin", output: "darknet://relay  v3.1.7\nbuild 20250914-a4f19c\nkernel 6.9.3-hardened" },
    { input: "verson",  output: "darknet://relay  v3.1.7\nbuild 20250914-a4f19c\nkernel 6.9.3-hardened" },
    { input: "vresion", output: "darknet://relay  v3.1.7\nbuild 20250914-a4f19c\nkernel 6.9.3-hardened" },
    { input: "ver",     output: "darknet://relay  v3.1.7\nbuild 20250914-a4f19c\nkernel 6.9.3-hardened" },

    // ── uptime ──────────────────────────────────────────────
    { input: "uptime",  output: "up 14 days, 06:41:22\nload avg: 0.14 0.09 0.06\nno forced restarts since boot" },
    { input: "uptim",   output: "up 14 days, 06:41:22\nload avg: 0.14 0.09 0.06\nno forced restarts since boot" },
    { input: "uptme",   output: "up 14 days, 06:41:22\nload avg: 0.14 0.09 0.06\nno forced restarts since boot" },
    { input: "up time", output: "up 14 days, 06:41:22\nload avg: 0.14 0.09 0.06\nno forced restarts since boot" },
    { input: "uptiem",  output: "up 14 days, 06:41:22\nload avg: 0.14 0.09 0.06\nno forced restarts since boot" },
    { input: "utime",   output: "up 14 days, 06:41:22\nload avg: 0.14 0.09 0.06\nno forced restarts since boot" },

    // ── date / time ─────────────────────────────────────────
    { input: "date", output: "2026-09-15 14:22:07 UTC\nclock skew: 0.004s (synced via onion ntp)\ntimezone leak: none" },
    { input: "dat",  output: "2026-09-15 14:22:07 UTC\nclock skew: 0.004s (synced via onion ntp)\ntimezone leak: none" },
    { input: "daet", output: "2026-09-15 14:22:07 UTC\nclock skew: 0.004s (synced via onion ntp)\ntimezone leak: none" },
    { input: "dtae", output: "2026-09-15 14:22:07 UTC\nclock skew: 0.004s (synced via onion ntp)\ntimezone leak: none" },
    { input: "day",  output: "2026-09-15 14:22:07 UTC\nclock skew: 0.004s (synced via onion ntp)\ntimezone leak: none" },
    { input: "time", output: "2026-09-15 14:22:07 UTC\nclock skew: 0.004s (synced via onion ntp)\ntimezone leak: none" },

    // ── history ─────────────────────────────────────────────
    { input: "history", output: "  1  connect\n  2  status\n  3  peers\n  4  scan 10.0.0.0/24\n  5  shred ~/logs/*\n— history is held in memory only —" },
    { input: "hitory",  output: "  1  connect\n  2  status\n  3  peers\n  4  scan 10.0.0.0/24\n  5  shred ~/logs/*\n— history is held in memory only —" },
    { input: "histroy", output: "  1  connect\n  2  status\n  3  peers\n  4  scan 10.0.0.0/24\n  5  shred ~/logs/*\n— history is held in memory only —" },
    { input: "histery", output: "  1  connect\n  2  status\n  3  peers\n  4  scan 10.0.0.0/24\n  5  shred ~/logs/*\n— history is held in memory only —" },
    { input: "histry",  output: "  1  connect\n  2  status\n  3  peers\n  4  scan 10.0.0.0/24\n  5  shred ~/logs/*\n— history is held in memory only —" },
    { input: "histoy",  output: "  1  connect\n  2  status\n  3  peers\n  4  scan 10.0.0.0/24\n  5  shred ~/logs/*\n— history is held in memory only —" },

    // ── environment / system info ──────────────────────────
    { input: "env",         output: "RELAY_ID=0x7F3A9C\nCIPHER=AES-256-GCM\nPROXY=socks5://127.0.0.1:9050\nLOGGING=disabled\nTZ=UTC" },
    { input: "evn",         output: "RELAY_ID=0x7F3A9C\nCIPHER=AES-256-GCM\nPROXY=socks5://127.0.0.1:9050\nLOGGING=disabled\nTZ=UTC" },
    { input: "enviroment",  output: "RELAY_ID=0x7F3A9C\nCIPHER=AES-256-GCM\nPROXY=socks5://127.0.0.1:9050\nLOGGING=disabled\nTZ=UTC" },
    { input: "environment", output: "RELAY_ID=0x7F3A9C\nCIPHER=AES-256-GCM\nPROXY=socks5://127.0.0.1:9050\nLOGGING=disabled\nTZ=UTC" },
    { input: "en",          output: "RELAY_ID=0x7F3A9C\nCIPHER=AES-256-GCM\nPROXY=socks5://127.0.0.1:9050\nLOGGING=disabled\nTZ=UTC" },
    { input: "env vars",    output: "RELAY_ID=0x7F3A9C\nCIPHER=AES-256-GCM\nPROXY=socks5://127.0.0.1:9050\nLOGGING=disabled\nTZ=UTC" },

    { input: "ps",  output: "PID   USER  CPU%  MEM%  COMMAND\n1     root  0.0   0.1   /sbin/init\n418   root  0.7   2.3   relayd --daemon\n922   root  1.2   4.1   tor --client\n1337  root  0.3   0.9   sshd" },
    { input: "pss", output: "PID   USER  CPU%  MEM%  COMMAND\n1     root  0.0   0.1   /sbin/init\n418   root  0.7   2.3   relayd --daemon\n922   root  1.2   4.1   tor --client\n1337  root  0.3   0.9   sshd" },
    { input: "p s", output: "PID   USER  CPU%  MEM%  COMMAND\n1     root  0.0   0.1   /sbin/init\n418   root  0.7   2.3   relayd --daemon\n922   root  1.2   4.1   tor --client\n1337  root  0.3   0.9   sshd" },
    { input: "pps", output: "PID   USER  CPU%  MEM%  COMMAND\n1     root  0.0   0.1   /sbin/init\n418   root  0.7   2.3   relayd --daemon\n922   root  1.2   4.1   tor --client\n1337  root  0.3   0.9   sshd" },
    { input: "spp", output: "PID   USER  CPU%  MEM%  COMMAND\n1     root  0.0   0.1   /sbin/init\n418   root  0.7   2.3   relayd --daemon\n922   root  1.2   4.1   tor --client\n1337  root  0.3   0.9   sshd" },
    { input: "ps aux", output: "PID   USER  CPU%  MEM%  COMMAND\n1     root  0.0   0.1   /sbin/init\n418   root  0.7   2.3   relayd --daemon\n922   root  1.2   4.1   tor --client\n1337  root  0.3   0.9   sshd" },

    { input: "df",  output: "FILESYSTEM       SIZE  USED  AVAIL  USE%  MOUNTED\n/dev/nvme0n1p2   512G  118G   394G   24%  /\ntmpfs             32G    0B    32G    0%  /dev/shm" },
    { input: "d f", output: "FILESYSTEM       SIZE  USED  AVAIL  USE%  MOUNTED\n/dev/nvme0n1p2   512G  118G   394G   24%  /\ntmpfs             32G    0B    32G    0%  /dev/shm" },
    { input: "fd",  output: "FILESYSTEM       SIZE  USED  AVAIL  USE%  MOUNTED\n/dev/nvme0n1p2   512G  118G   394G   24%  /\ntmpfs             32G    0B    32G    0%  /dev/shm" },
    { input: "dff", output: "FILESYSTEM       SIZE  USED  AVAIL  USE%  MOUNTED\n/dev/nvme0n1p2   512G  118G   394G   24%  /\ntmpfs             32G    0B    32G    0%  /dev/shm" },
    { input: "dv",  output: "FILESYSTEM       SIZE  USED  AVAIL  USE%  MOUNTED\n/dev/nvme0n1p2   512G  118G   394G   24%  /\ntmpfs             32G    0B    32G    0%  /dev/shm" },
    { input: "df -h", output: "FILESYSTEM       SIZE  USED  AVAIL  USE%  MOUNTED\n/dev/nvme0n1p2   512G  118G   394G   24%  /\ntmpfs             32G    0B    32G    0%  /dev/shm" },

    { input: "free",  output: "        total   used   free   shared\nMem:     64G    27G    36G    1.2G\nSwap:     8G     0B     8G\nswap never touched this session" },
    { input: "fre",   output: "        total   used   free   shared\nMem:     64G    27G    36G    1.2G\nSwap:     8G     0B     8G\nswap never touched this session" },
    { input: "freee", output: "        total   used   free   shared\nMem:     64G    27G    36G    1.2G\nSwap:     8G     0B     8G\nswap never touched this session" },
    { input: "fer",   output: "        total   used   free   shared\nMem:     64G    27G    36G    1.2G\nSwap:     8G     0B     8G\nswap never touched this session" },
    { input: "fre e", output: "        total   used   free   shared\nMem:     64G    27G    36G    1.2G\nSwap:     8G     0B     8G\nswap never touched this session" },
    { input: "mem",   output: "        total   used   free   shared\nMem:     64G    27G    36G    1.2G\nSwap:     8G     0B     8G\nswap never touched this session" },

    // ── connection lifecycle ────────────────────────────────
    { input: "connect",  output: "initiating handshake ...\n [ok] guard node accepted\n [ok] circuit built (3 hops)\n [ok] session key derived\ntunnel established. traffic is now routed." },
    { input: "conect",   output: "initiating handshake ...\n [ok] guard node accepted\n [ok] circuit built (3 hops)\n [ok] session key derived\ntunnel established. traffic is now routed." },
    { input: "connec",   output: "initiating handshake ...\n [ok] guard node accepted\n [ok] circuit built (3 hops)\n [ok] session key derived\ntunnel established. traffic is now routed." },
    { input: "conenct",  output: "initiating handshake ...\n [ok] guard node accepted\n [ok] circuit built (3 hops)\n [ok] session key derived\ntunnel established. traffic is now routed." },
    { input: "connet",   output: "initiating handshake ...\n [ok] guard node accepted\n [ok] circuit built (3 hops)\n [ok] session key derived\ntunnel established. traffic is now routed." },
    { input: "konnect",  output: "initiating handshake ...\n [ok] guard node accepted\n [ok] circuit built (3 hops)\n [ok] session key derived\ntunnel established. traffic is now routed." },
    { input: "conntect", output: "initiating handshake ...\n [ok] guard node accepted\n [ok] circuit built (3 hops)\n [ok] session key derived\ntunnel established. traffic is now routed." },

    { input: "disconnect", output: "tearing down circuit ...\n [ok] guard closed\n [ok] session key wiped\n [ok] socket released\ntunnel down. you are back on the clearnet." },
    { input: "disconect",  output: "tearing down circuit ...\n [ok] guard closed\n [ok] session key wiped\n [ok] socket released\ntunnel down. you are back on the clearnet." },
    { input: "disconnet",  output: "tearing down circuit ...\n [ok] guard closed\n [ok] session key wiped\n [ok] socket released\ntunnel down. you are back on the clearnet." },
    { input: "diconnect",  output: "tearing down circuit ...\n [ok] guard closed\n [ok] session key wiped\n [ok] socket released\ntunnel down. you are back on the clearnet." },
    { input: "disconnct",  output: "tearing down circuit ...\n [ok] guard closed\n [ok] session key wiped\n [ok] socket released\ntunnel down. you are back on the clearnet." },
    { input: "disconnec",  output: "tearing down circuit ...\n [ok] guard closed\n [ok] session key wiped\n [ok] socket released\ntunnel down. you are back on the clearnet." },

    // ── network ─────────────────────────────────────────────
    { input: "peers", output: "45.132.8.77     guard    12ms    online\n91.204.13.5     middle   38ms    online\n176.9.44.201    exit     61ms    online\n3/3 peers reachable" },
    { input: "pers",  output: "45.132.8.77     guard    12ms    online\n91.204.13.5     middle   38ms    online\n176.9.44.201    exit     61ms    online\n3/3 peers reachable" },
    { input: "pees",  output: "45.132.8.77     guard    12ms    online\n91.204.13.5     middle   38ms    online\n176.9.44.201    exit     61ms    online\n3/3 peers reachable" },
    { input: "pears", output: "45.132.8.77     guard    12ms    online\n91.204.13.5     middle   38ms    online\n176.9.44.201    exit     61ms    online\n3/3 peers reachable" },
    { input: "peer",  output: "45.132.8.77     guard    12ms    online\n91.204.13.5     middle   38ms    online\n176.9.44.201    exit     61ms    online\n3/3 peers reachable" },
    { input: "pes",   output: "45.132.8.77     guard    12ms    online\n91.204.13.5     middle   38ms    online\n176.9.44.201    exit     61ms    online\n3/3 peers reachable" },

    { input: "trace",      output: "traceroute to exit.node (176.9.44.201), 30 hops max\n 1  10.0.0.1          1.204 ms\n 2  45.132.8.77      12.881 ms\n 3  91.204.13.5      38.402 ms\n 4  * * *\n 5  176.9.44.201     61.113 ms\nroute obfuscated — 2 hops withheld" },
    { input: "traceroute", output: "traceroute to exit.node (176.9.44.201), 30 hops max\n 1  10.0.0.1          1.204 ms\n 2  45.132.8.77      12.881 ms\n 3  91.204.13.5      38.402 ms\n 4  * * *\n 5  176.9.44.201     61.113 ms\nroute obfuscated — 2 hops withheld" },
    { input: "trac",       output: "traceroute to exit.node (176.9.44.201), 30 hops max\n 1  10.0.0.1          1.204 ms\n 2  45.132.8.77      12.881 ms\n 3  91.204.13.5      38.402 ms\n 4  * * *\n 5  176.9.44.201     61.113 ms\nroute obfuscated — 2 hops withheld" },
    { input: "trase",      output: "traceroute to exit.node (176.9.44.201), 30 hops max\n 1  10.0.0.1          1.204 ms\n 2  45.132.8.77      12.881 ms\n 3  91.204.13.5      38.402 ms\n 4  * * *\n 5  176.9.44.201     61.113 ms\nroute obfuscated — 2 hops withheld" },
    { input: "tracr",      output: "traceroute to exit.node (176.9.44.201), 30 hops max\n 1  10.0.0.1          1.204 ms\n 2  45.132.8.77      12.881 ms\n 3  91.204.13.5      38.402 ms\n 4  * * *\n 5  176.9.44.201     61.113 ms\nroute obfuscated — 2 hops withheld" },
    { input: "tace",       output: "traceroute to exit.node (176.9.44.201), 30 hops max\n 1  10.0.0.1          1.204 ms\n 2  45.132.8.77      12.881 ms\n 3  91.204.13.5      38.402 ms\n 4  * * *\n 5  176.9.44.201     61.113 ms\nroute obfuscated — 2 hops withheld" },

    { input: "scan", output: "scanning 10.0.0.0/24 ...\n host 10.0.0.1     up    gw\n host 10.0.0.14    up    ssh:22\n host 10.0.0.22    up    http:80  https:443\n host 10.0.0.31    down\n4 hosts up, 1 down — completed in 0.42s" },
    { input: "nmap", output: "scanning 10.0.0.0/24 ...\n host 10.0.0.1     up    gw\n host 10.0.0.14    up    ssh:22\n host 10.0.0.22    up    http:80  https:443\n host 10.0.0.31    down\n4 hosts up, 1 down — completed in 0.42s" },
    { input: "scna", output: "scanning 10.0.0.0/24 ...\n host 10.0.0.1     up    gw\n host 10.0.0.14    up    ssh:22\n host 10.0.0.22    up    http:80  https:443\n host 10.0.0.31    down\n4 hosts up, 1 down — completed in 0.42s" },
    { input: "san",  output: "scanning 10.0.0.0/24 ...\n host 10.0.0.1     up    gw\n host 10.0.0.14    up    ssh:22\n host 10.0.0.22    up    http:80  https:443\n host 10.0.0.31    down\n4 hosts up, 1 down — completed in 0.42s" },
    { input: "skan", output: "scanning 10.0.0.0/24 ...\n host 10.0.0.1     up    gw\n host 10.0.0.14    up    ssh:22\n host 10.0.0.22    up    http:80  https:443\n host 10.0.0.31    down\n4 hosts up, 1 down — completed in 0.42s" },
    { input: "sca",  output: "scanning 10.0.0.0/24 ...\n host 10.0.0.1     up    gw\n host 10.0.0.14    up    ssh:22\n host 10.0.0.22    up    http:80  https:443\n host 10.0.0.31    down\n4 hosts up, 1 down — completed in 0.42s" },

    { input: "ports", output: "PORT      STATE     SERVICE\n22/tcp    open      ssh\n80/tcp    open      http\n443/tcp   open      https\n9050/tcp  open      socks5\n31337/tcp filtered  unknown" },
    { input: "prots", output: "PORT      STATE     SERVICE\n22/tcp    open      ssh\n80/tcp    open      http\n443/tcp   open      https\n9050/tcp  open      socks5\n31337/tcp filtered  unknown" },
    { input: "potrs", output: "PORT      STATE     SERVICE\n22/tcp    open      ssh\n80/tcp    open      http\n443/tcp   open      https\n9050/tcp  open      socks5\n31337/tcp filtered  unknown" },
    { input: "port",  output: "PORT      STATE     SERVICE\n22/tcp    open      ssh\n80/tcp    open      http\n443/tcp   open      https\n9050/tcp  open      socks5\n31337/tcp filtered  unknown" },
    { input: "prot",  output: "PORT      STATE     SERVICE\n22/tcp    open      ssh\n80/tcp    open      http\n443/tcp   open      https\n9050/tcp  open      socks5\n31337/tcp filtered  unknown" },
    { input: "ptos",  output: "PORT      STATE     SERVICE\n22/tcp    open      ssh\n80/tcp    open      http\n443/tcp   open      https\n9050/tcp  open      socks5\n31337/tcp filtered  unknown" },

    { input: "ping",  output: "PING exit.node (176.9.44.201): 56 data bytes\n64 bytes: icmp_seq=0 ttl=52 time=61.1 ms\n64 bytes: icmp_seq=1 ttl=52 time=59.8 ms\n64 bytes: icmp_seq=2 ttl=52 time=62.4 ms\n--- 3 packets, 0% loss, avg 61.1 ms ---" },
    { input: "pign",  output: "PING exit.node (176.9.44.201): 56 data bytes\n64 bytes: icmp_seq=0 ttl=52 time=61.1 ms\n64 bytes: icmp_seq=1 ttl=52 time=59.8 ms\n64 bytes: icmp_seq=2 ttl=52 time=62.4 ms\n--- 3 packets, 0% loss, avg 61.1 ms ---" },
    { input: "pin",   output: "PING exit.node (176.9.44.201): 56 data bytes\n64 bytes: icmp_seq=0 ttl=52 time=61.1 ms\n64 bytes: icmp_seq=1 ttl=52 time=59.8 ms\n64 bytes: icmp_seq=2 ttl=52 time=62.4 ms\n--- 3 packets, 0% loss, avg 61.1 ms ---" },
    { input: "pingg", output: "PING exit.node (176.9.44.201): 56 data bytes\n64 bytes: icmp_seq=0 ttl=52 time=61.1 ms\n64 bytes: icmp_seq=1 ttl=52 time=59.8 ms\n64 bytes: icmp_seq=2 ttl=52 time=62.4 ms\n--- 3 packets, 0% loss, avg 61.1 ms ---" },
    { input: "pimg",  output: "PING exit.node (176.9.44.201): 56 data bytes\n64 bytes: icmp_seq=0 ttl=52 time=61.1 ms\n64 bytes: icmp_seq=1 ttl=52 time=59.8 ms\n64 bytes: icmp_seq=2 ttl=52 time=62.4 ms\n--- 3 packets, 0% loss, avg 61.1 ms ---" },
    { input: "png",   output: "PING exit.node (176.9.44.201): 56 data bytes\n64 bytes: icmp_seq=0 ttl=52 time=61.1 ms\n64 bytes: icmp_seq=1 ttl=52 time=59.8 ms\n64 bytes: icmp_seq=2 ttl=52 time=62.4 ms\n--- 3 packets, 0% loss, avg 61.1 ms ---" },

    { input: "dns",     output: "resolving exit.node ...\n A      176.9.44.201\n AAAA   2a01:4f8:1c17:0::1\nresolver: 127.0.0.1:5353 (dnscrypt)\nqueries are not logged" },
    { input: "dsn",     output: "resolving exit.node ...\n A      176.9.44.201\n AAAA   2a01:4f8:1c17:0::1\nresolver: 127.0.0.1:5353 (dnscrypt)\nqueries are not logged" },
    { input: "dn",      output: "resolving exit.node ...\n A      176.9.44.201\n AAAA   2a01:4f8:1c17:0::1\nresolver: 127.0.0.1:5353 (dnscrypt)\nqueries are not logged" },
    { input: "dbs",     output: "resolving exit.node ...\n A      176.9.44.201\n AAAA   2a01:4f8:1c17:0::1\nresolver: 127.0.0.1:5353 (dnscrypt)\nqueries are not logged" },
    { input: "dnss",    output: "resolving exit.node ...\n A      176.9.44.201\n AAAA   2a01:4f8:1c17:0::1\nresolver: 127.0.0.1:5353 (dnscrypt)\nqueries are not logged" },
    { input: "resolve", output: "resolving exit.node ...\n A      176.9.44.201\n AAAA   2a01:4f8:1c17:0::1\nresolver: 127.0.0.1:5353 (dnscrypt)\nqueries are not logged" },

    { input: "ifconfig",  output: "tun0   inet 10.8.0.6      netmask 255.255.255.0  mtu 1500  UP\neth0   inet 192.168.1.42  netmask 255.255.255.0  DOWN\nlo     inet 127.0.0.1     netmask 255.0.0.0      UP" },
    { input: "ipconfig",  output: "tun0   inet 10.8.0.6      netmask 255.255.255.0  mtu 1500  UP\neth0   inet 192.168.1.42  netmask 255.255.255.0  DOWN\nlo     inet 127.0.0.1     netmask 255.0.0.0      UP" },
    { input: "ifconfg",   output: "tun0   inet 10.8.0.6      netmask 255.255.255.0  mtu 1500  UP\neth0   inet 192.168.1.42  netmask 255.255.255.0  DOWN\nlo     inet 127.0.0.1     netmask 255.0.0.0      UP" },
    { input: "ifconig",   output: "tun0   inet 10.8.0.6      netmask 255.255.255.0  mtu 1500  UP\neth0   inet 192.168.1.42  netmask 255.255.255.0  DOWN\nlo     inet 127.0.0.1     netmask 255.0.0.0      UP" },
    { input: "ip",        output: "tun0   inet 10.8.0.6      netmask 255.255.255.0  mtu 1500  UP\neth0   inet 192.168.1.42  netmask 255.255.255.0  DOWN\nlo     inet 127.0.0.1     netmask 255.0.0.0      UP" },
    { input: "ifconfigg", output: "tun0   inet 10.8.0.6      netmask 255.255.255.0  mtu 1500  UP\neth0   inet 192.168.1.42  netmask 255.255.255.0  DOWN\nlo     inet 127.0.0.1     netmask 255.0.0.0      UP" },

    { input: "netstat",  output: "Proto  Local              Foreign            State\ntcp    10.8.0.6:51122     176.9.44.201:443   ESTABLISHED\ntcp    127.0.0.1:9050     0.0.0.0:*          LISTEN\nudp    0.0.0.0:5353       0.0.0.0:*          -" },
    { input: "nestat",   output: "Proto  Local              Foreign            State\ntcp    10.8.0.6:51122     176.9.44.201:443   ESTABLISHED\ntcp    127.0.0.1:9050     0.0.0.0:*          LISTEN\nudp    0.0.0.0:5353       0.0.0.0:*          -" },
    { input: "netstt",   output: "Proto  Local              Foreign            State\ntcp    10.8.0.6:51122     176.9.44.201:443   ESTABLISHED\ntcp    127.0.0.1:9050     0.0.0.0:*          LISTEN\nudp    0.0.0.0:5353       0.0.0.0:*          -" },
    { input: "netsta",   output: "Proto  Local              Foreign            State\ntcp    10.8.0.6:51122     176.9.44.201:443   ESTABLISHED\ntcp    127.0.0.1:9050     0.0.0.0:*          LISTEN\nudp    0.0.0.0:5353       0.0.0.0:*          -" },
    { input: "netstat?", output: "Proto  Local              Foreign            State\ntcp    10.8.0.6:51122     176.9.44.201:443   ESTABLISHED\ntcp    127.0.0.1:9050     0.0.0.0:*          LISTEN\nudp    0.0.0.0:5353       0.0.0.0:*          -" },
    { input: "netsat",   output: "Proto  Local              Foreign            State\ntcp    10.8.0.6:51122     176.9.44.201:443   ESTABLISHED\ntcp    127.0.0.1:9050     0.0.0.0:*          LISTEN\nudp    0.0.0.0:5353       0.0.0.0:*          -" },

    { input: "circuit", output: "circuit id: 8823f1a0c7d4e991\n guard   45.132.8.77     (DE)\n middle  91.204.13.5     (NL)\n exit    176.9.44.201    (IS)\nage 00:41:07  ·  rekey in 00:18:53" },
    { input: "circut",  output: "circuit id: 8823f1a0c7d4e991\n guard   45.132.8.77     (DE)\n middle  91.204.13.5     (NL)\n exit    176.9.44.201    (IS)\nage 00:41:07  ·  rekey in 00:18:53" },
    { input: "ciruit",  output: "circuit id: 8823f1a0c7d4e991\n guard   45.132.8.77     (DE)\n middle  91.204.13.5     (NL)\n exit    176.9.44.201    (IS)\nage 00:41:07  ·  rekey in 00:18:53" },
    { input: "circit",  output: "circuit id: 8823f1a0c7d4e991\n guard   45.132.8.77     (DE)\n middle  91.204.13.5     (NL)\n exit    176.9.44.201    (IS)\nage 00:41:07  ·  rekey in 00:18:53" },
    { input: "circui",  output: "circuit id: 8823f1a0c7d4e991\n guard   45.132.8.77     (DE)\n middle  91.204.13.5     (NL)\n exit    176.9.44.201    (IS)\nage 00:41:07  ·  rekey in 00:18:53" },
    { input: "circiut", output: "circuit id: 8823f1a0c7d4e991\n guard   45.132.8.77     (DE)\n middle  91.204.13.5     (NL)\n exit    176.9.44.201    (IS)\nage 00:41:07  ·  rekey in 00:18:53" },

    { input: "leak",      output: "running leak audit ...\n DNS leak ......... none\n IPv6 leak ........ none\n WebRTC leak ...... none\n timing leak ...... none\nclean. no clearnet egress detected." },
    { input: "leek",      output: "running leak audit ...\n DNS leak ......... none\n IPv6 leak ........ none\n WebRTC leak ...... none\n timing leak ...... none\nclean. no clearnet egress detected." },
    { input: "lek",       output: "running leak audit ...\n DNS leak ......... none\n IPv6 leak ........ none\n WebRTC leak ...... none\n timing leak ...... none\nclean. no clearnet egress detected." },
    { input: "leack",     output: "running leak audit ...\n DNS leak ......... none\n IPv6 leak ........ none\n WebRTC leak ...... none\n timing leak ...... none\nclean. no clearnet egress detected." },
    { input: "laek",      output: "running leak audit ...\n DNS leak ......... none\n IPv6 leak ........ none\n WebRTC leak ...... none\n timing leak ...... none\nclean. no clearnet egress detected." },
    { input: "leak test", output: "running leak audit ...\n DNS leak ......... none\n IPv6 leak ........ none\n WebRTC leak ...... none\n timing leak ...... none\nclean. no clearnet egress detected." },

    { input: "firewall",  output: "chain INPUT (policy DROP)\n ACCEPT  lo\n ACCEPT  tun0\n DROP    eth0  (all)\nchain OUTPUT (policy ACCEPT)\n only tun0 permitted" },
    { input: "firewal",   output: "chain INPUT (policy DROP)\n ACCEPT  lo\n ACCEPT  tun0\n DROP    eth0  (all)\nchain OUTPUT (policy ACCEPT)\n only tun0 permitted" },
    { input: "firwall",   output: "chain INPUT (policy DROP)\n ACCEPT  lo\n ACCEPT  tun0\n DROP    eth0  (all)\nchain OUTPUT (policy ACCEPT)\n only tun0 permitted" },
    { input: "firewll",   output: "chain INPUT (policy DROP)\n ACCEPT  lo\n ACCEPT  tun0\n DROP    eth0  (all)\nchain OUTPUT (policy ACCEPT)\n only tun0 permitted" },
    { input: "fire wall", output: "chain INPUT (policy DROP)\n ACCEPT  lo\n ACCEPT  tun0\n DROP    eth0  (all)\nchain OUTPUT (policy ACCEPT)\n only tun0 permitted" },
    { input: "fw",        output: "chain INPUT (policy DROP)\n ACCEPT  lo\n ACCEPT  tun0\n DROP    eth0  (all)\nchain OUTPUT (policy ACCEPT)\n only tun0 permitted" },

    // ── crypto ──────────────────────────────────────────────
    { input: "encrypt", output: "ciphertext (AES-256-GCM, base64):\n kR9fT2xQ8mZ0pL4vN7cA1dH6sW3jE5yB0uG2iO8nR=\ntag: 9f2c71abde04\nkey: session key (never leaves this process)" },
    { input: "encript", output: "ciphertext (AES-256-GCM, base64):\n kR9fT2xQ8mZ0pL4vN7cA1dH6sW3jE5yB0uG2iO8nR=\ntag: 9f2c71abde04\nkey: session key (never leaves this process)" },
    { input: "encrpt",  output: "ciphertext (AES-256-GCM, base64):\n kR9fT2xQ8mZ0pL4vN7cA1dH6sW3jE5yB0uG2iO8nR=\ntag: 9f2c71abde04\nkey: session key (never leaves this process)" },
    { input: "encryp",  output: "ciphertext (AES-256-GCM, base64):\n kR9fT2xQ8mZ0pL4vN7cA1dH6sW3jE5yB0uG2iO8nR=\ntag: 9f2c71abde04\nkey: session key (never leaves this process)" },
    { input: "encypt",  output: "ciphertext (AES-256-GCM, base64):\n kR9fT2xQ8mZ0pL4vN7cA1dH6sW3jE5yB0uG2iO8nR=\ntag: 9f2c71abde04\nkey: session key (never leaves this process)" },
    { input: "incrypt", output: "ciphertext (AES-256-GCM, base64):\n kR9fT2xQ8mZ0pL4vN7cA1dH6sW3jE5yB0uG2iO8nR=\ntag: 9f2c71abde04\nkey: session key (never leaves this process)" },

    { input: "decrypt", output: "no payload supplied.\nsyntax: decrypt <ciphertext>\nexample: decrypt kR9fT2xQ8mZ0pL4vN7cA1dH6sW3jE5yB0uG2iO8nR=" },
    { input: "decript", output: "no payload supplied.\nsyntax: decrypt <ciphertext>\nexample: decrypt kR9fT2xQ8mZ0pL4vN7cA1dH6sW3jE5yB0uG2iO8nR=" },
    { input: "decrpt",  output: "no payload supplied.\nsyntax: decrypt <ciphertext>\nexample: decrypt kR9fT2xQ8mZ0pL4vN7cA1dH6sW3jE5yB0uG2iO8nR=" },
    { input: "decryp",  output: "no payload supplied.\nsyntax: decrypt <ciphertext>\nexample: decrypt kR9fT2xQ8mZ0pL4vN7cA1dH6sW3jE5yB0uG2iO8nR=" },
    { input: "decypt",  output: "no payload supplied.\nsyntax: decrypt <ciphertext>\nexample: decrypt kR9fT2xQ8mZ0pL4vN7cA1dH6sW3jE5yB0uG2iO8nR=" },
    { input: "derypt",  output: "no payload supplied.\nsyntax: decrypt <ciphertext>\nexample: decrypt kR9fT2xQ8mZ0pL4vN7cA1dH6sW3jE5yB0uG2iO8nR=" },

    { input: "hash", output: "algo: SHA-512\ndigest:\n 9f2c71abde04c8e1a3b57d620f4e98cc1d02a7b3e5f64\n a81c0d9e7b23f4a5c6d8e90b1f2a3c4d5e6f7a8b9c0d\nno plaintext retained" },
    { input: "hsah", output: "algo: SHA-512\ndigest:\n 9f2c71abde04c8e1a3b57d620f4e98cc1d02a7b3e5f64\n a81c0d9e7b23f4a5c6d8e90b1f2a3c4d5e6f7a8b9c0d\nno plaintext retained" },
    { input: "has",  output: "algo: SHA-512\ndigest:\n 9f2c71abde04c8e1a3b57d620f4e98cc1d02a7b3e5f64\n a81c0d9e7b23f4a5c6d8e90b1f2a3c4d5e6f7a8b9c0d\nno plaintext retained" },
    { input: "hsh",  output: "algo: SHA-512\ndigest:\n 9f2c71abde04c8e1a3b57d620f4e98cc1d02a7b3e5f64\n a81c0d9e7b23f4a5c6d8e90b1f2a3c4d5e6f7a8b9c0d\nno plaintext retained" },
    { input: "hahs", output: "algo: SHA-512\ndigest:\n 9f2c71abde04c8e1a3b57d620f4e98cc1d02a7b3e5f64\n a81c0d9e7b23f4a5c6d8e90b1f2a3c4d5e6f7a8b9c0d\nno plaintext retained" },
    { input: "hasg", output: "algo: SHA-512\ndigest:\n 9f2c71abde04c8e1a3b57d620f4e98cc1d02a7b3e5f64\n a81c0d9e7b23f4a5c6d8e90b1f2a3c4d5e6f7a8b9c0d\nno plaintext retained" },

    { input: "keygen",  output: "generating X25519 keypair ...\n [ok] private key written to ~/.relay/id_ed25519\n [ok] public key  → 9F2C71AB DE04C8E1\nentropy source: /dev/urandom (4096 bits)" },
    { input: "keygn",   output: "generating X25519 keypair ...\n [ok] private key written to ~/.relay/id_ed25519\n [ok] public key  → 9F2C71AB DE04C8E1\nentropy source: /dev/urandom (4096 bits)" },
    { input: "key gen", output: "generating X25519 keypair ...\n [ok] private key written to ~/.relay/id_ed25519\n [ok] public key  → 9F2C71AB DE04C8E1\nentropy source: /dev/urandom (4096 bits)" },
    { input: "keyge",   output: "generating X25519 keypair ...\n [ok] private key written to ~/.relay/id_ed25519\n [ok] public key  → 9F2C71AB DE04C8E1\nentropy source: /dev/urandom (4096 bits)" },
    { input: "kyegen",  output: "generating X25519 keypair ...\n [ok] private key written to ~/.relay/id_ed25519\n [ok] public key  → 9F2C71AB DE04C8E1\nentropy source: /dev/urandom (4096 bits)" },
    { input: "keggen",  output: "generating X25519 keypair ...\n [ok] private key written to ~/.relay/id_ed25519\n [ok] public key  → 9F2C71AB DE04C8E1\nentropy source: /dev/urandom (4096 bits)" },

    { input: "fingerprint",  output: "9F2C 71AB DE04 C8E1 A3B5 7D62 0F4E 98CC\nverified against out-of-band channel: MATCH\nkey age: 14 days" },
    { input: "fingerpint",   output: "9F2C 71AB DE04 C8E1 A3B5 7D62 0F4E 98CC\nverified against out-of-band channel: MATCH\nkey age: 14 days" },
    { input: "fingeprint",   output: "9F2C 71AB DE04 C8E1 A3B5 7D62 0F4E 98CC\nverified against out-of-band channel: MATCH\nkey age: 14 days" },
    { input: "fingerprnt",   output: "9F2C 71AB DE04 C8E1 A3B5 7D62 0F4E 98CC\nverified against out-of-band channel: MATCH\nkey age: 14 days" },
    { input: "fingrprint",   output: "9F2C 71AB DE04 C8E1 A3B5 7D62 0F4E 98CC\nverified against out-of-band channel: MATCH\nkey age: 14 days" },
    { input: "finger print", output: "9F2C 71AB DE04 C8E1 A3B5 7D62 0F4E 98CC\nverified against out-of-band channel: MATCH\nkey age: 14 days" },

    // ── filesystem ──────────────────────────────────────────
    { input: "ls",  output: "drwx------  id_ed25519\n-rw-------  id_ed25519.pub\ndrwx------  logs/        (empty)\n-rw-r--r--  config.toml" },
    { input: "lss", output: "drwx------  id_ed25519\n-rw-------  id_ed25519.pub\ndrwx------  logs/        (empty)\n-rw-r--r--  config.toml" },
    { input: "l s", output: "drwx------  id_ed25519\n-rw-------  id_ed25519.pub\ndrwx------  logs/        (empty)\n-rw-r--r--  config.toml" },
    { input: "sl",  output: "drwx------  id_ed25519\n-rw-------  id_ed25519.pub\ndrwx------  logs/        (empty)\n-rw-r--r--  config.toml" },
    { input: "lls", output: "drwx------  id_ed25519\n-rw-------  id_ed25519.pub\ndrwx------  logs/        (empty)\n-rw-r--r--  config.toml" },
    { input: "dir", output: "drwx------  id_ed25519\n-rw-------  id_ed25519.pub\ndrwx------  logs/        (empty)\n-rw-r--r--  config.toml" },

    { input: "cat",  output: "> ~/relay/config.toml\nrelay_id = 0x7F3A9C\ncipher   = aes-256-gcm\nproxy    = socks5://127.0.0.1:9050\nlog      = false\nkillswitch = on" },
    { input: "ct",   output: "> ~/relay/config.toml\nrelay_id = 0x7F3A9C\ncipher   = aes-256-gcm\nproxy    = socks5://127.0.0.1:9050\nlog      = false\nkillswitch = on" },
    { input: "caat", output: "> ~/relay/config.toml\nrelay_id = 0x7F3A9C\ncipher   = aes-256-gcm\nproxy    = socks5://127.0.0.1:9050\nlog      = false\nkillswitch = on" },
    { input: "kat",  output: "> ~/relay/config.toml\nrelay_id = 0x7F3A9C\ncipher   = aes-256-gcm\nproxy    = socks5://127.0.0.1:9050\nlog      = false\nkillswitch = on" },
    { input: "cath", output: "> ~/relay/config.toml\nrelay_id = 0x7F3A9C\ncipher   = aes-256-gcm\nproxy    = socks5://127.0.0.1:9050\nlog      = false\nkillswitch = on" },
    { input: "read", output: "> ~/relay/config.toml\nrelay_id = 0x7F3A9C\ncipher   = aes-256-gcm\nproxy    = socks5://127.0.0.1:9050\nlog      = false\nkillswitch = on" },

    { input: "pwd",  output: "/home/root/relay\n(no symlinks — realpath resolved)" },
    { input: "pdw",  output: "/home/root/relay\n(no symlinks — realpath resolved)" },
    { input: "p wd", output: "/home/root/relay\n(no symlinks — realpath resolved)" },
    { input: "pwdd", output: "/home/root/relay\n(no symlinks — realpath resolved)" },
    { input: "pws",  output: "/home/root/relay\n(no symlinks — realpath resolved)" },
    { input: "cwd",  output: "/home/root/relay\n(no symlinks — realpath resolved)" },

    { input: "find",  output: "searching /home ...\n ./relay/config.toml\n ./relay/id_ed25519\n ./relay/.cache/session.bin\n3 results in 0.08s" },
    { input: "fidn",  output: "searching /home ...\n ./relay/config.toml\n ./relay/id_ed25519\n ./relay/.cache/session.bin\n3 results in 0.08s" },
    { input: "fnd",   output: "searching /home ...\n ./relay/config.toml\n ./relay/id_ed25519\n ./relay/.cache/session.bin\n3 results in 0.08s" },
    { input: "finnd", output: "searching /home ...\n ./relay/config.toml\n ./relay/id_ed25519\n ./relay/.cache/session.bin\n3 results in 0.08s" },
    { input: "fnid",  output: "searching /home ...\n ./relay/config.toml\n ./relay/id_ed25519\n ./relay/.cache/session.bin\n3 results in 0.08s" },
    { input: "findd", output: "searching /home ...\n ./relay/config.toml\n ./relay/id_ed25519\n ./relay/.cache/session.bin\n3 results in 0.08s" },

    { input: "grep",  output: "> grep key ~/relay/config.toml\n12: private_key = ~/.relay/id_ed25519\n18: pubkey      = 9F2C71ABDE04C8E1\n2 matches" },
    { input: "gerp",  output: "> grep key ~/relay/config.toml\n12: private_key = ~/.relay/id_ed25519\n18: pubkey      = 9F2C71ABDE04C8E1\n2 matches" },
    { input: "grepp", output: "> grep key ~/relay/config.toml\n12: private_key = ~/.relay/id_ed25519\n18: pubkey      = 9F2C71ABDE04C8E1\n2 matches" },
    { input: "grp",   output: "> grep key ~/relay/config.toml\n12: private_key = ~/.relay/id_ed25519\n18: pubkey      = 9F2C71ABDE04C8E1\n2 matches" },
    { input: "gred",  output: "> grep key ~/relay/config.toml\n12: private_key = ~/.relay/id_ed25519\n18: pubkey      = 9F2C71ABDE04C8E1\n2 matches" },
    { input: "grap",  output: "> grep key ~/relay/config.toml\n12: private_key = ~/.relay/id_ed25519\n18: pubkey      = 9F2C71ABDE04C8E1\n2 matches" },

    // ── transfer ────────────────────────────────────────────
    { input: "download", output: "fetching over circuit ...\n [████████████████████] 100%  4.2 MiB / 4.2 MiB\nsaved → ~/incoming/payload.bin\nsha256 verified: OK" },
    { input: "dowload",  output: "fetching over circuit ...\n [████████████████████] 100%  4.2 MiB / 4.2 MiB\nsaved → ~/incoming/payload.bin\nsha256 verified: OK" },
    { input: "donwload", output: "fetching over circuit ...\n [████████████████████] 100%  4.2 MiB / 4.2 MiB\nsaved → ~/incoming/payload.bin\nsha256 verified: OK" },
    { input: "downlaod", output: "fetching over circuit ...\n [████████████████████] 100%  4.2 MiB / 4.2 MiB\nsaved → ~/incoming/payload.bin\nsha256 verified: OK" },
    { input: "dowmload", output: "fetching over circuit ...\n [████████████████████] 100%  4.2 MiB / 4.2 MiB\nsaved → ~/incoming/payload.bin\nsha256 verified: OK" },
    { input: "fetch",    output: "fetching over circuit ...\n [████████████████████] 100%  4.2 MiB / 4.2 MiB\nsaved → ~/incoming/payload.bin\nsha256 verified: OK" },

    { input: "upload", output: "> upload ~/out/report.enc\npushing over circuit ...\n [████████████████████] 100%  812 KiB\ndelivered to peer 91.204.13.5" },
    { input: "uplaod", output: "> upload ~/out/report.enc\npushing over circuit ...\n [████████████████████] 100%  812 KiB\ndelivered to peer 91.204.13.5" },
    { input: "upoad",  output: "> upload ~/out/report.enc\npushing over circuit ...\n [████████████████████] 100%  812 KiB\ndelivered to peer 91.204.13.5" },
    { input: "uoload", output: "> upload ~/out/report.enc\npushing over circuit ...\n [████████████████████] 100%  812 KiB\ndelivered to peer 91.204.13.5" },
    { input: "uplod",  output: "> upload ~/out/report.enc\npushing over circuit ...\n [████████████████████] 100%  812 KiB\ndelivered to peer 91.204.13.5" },
    { input: "send",   output: "> upload ~/out/report.enc\npushing over circuit ...\n [████████████████████] 100%  812 KiB\ndelivered to peer 91.204.13.5" },

    { input: "shred",  output: "overwriting ~/logs/session.log ...\n pass 1/3  random   [ok]\n pass 2/3  zeros    [ok]\n pass 3/3  random   [ok]\nfile unlinked. no recovery possible." },
    { input: "shrd",   output: "overwriting ~/logs/session.log ...\n pass 1/3  random   [ok]\n pass 2/3  zeros    [ok]\n pass 3/3  random   [ok]\nfile unlinked. no recovery possible." },
    { input: "shread", output: "overwriting ~/logs/session.log ...\n pass 1/3  random   [ok]\n pass 2/3  zeros    [ok]\n pass 3/3  random   [ok]\nfile unlinked. no recovery possible." },
    { input: "shre",   output: "overwriting ~/logs/session.log ...\n pass 1/3  random   [ok]\n pass 2/3  zeros    [ok]\n pass 3/3  random   [ok]\nfile unlinked. no recovery possible." },
    { input: "sherd",  output: "overwriting ~/logs/session.log ...\n pass 1/3  random   [ok]\n pass 2/3  zeros    [ok]\n pass 3/3  random   [ok]\nfile unlinked. no recovery possible." },
    { input: "wipe",   output: "overwriting ~/logs/session.log ...\n pass 1/3  random   [ok]\n pass 2/3  zeros    [ok]\n pass 3/3  random   [ok]\nfile unlinked. no recovery possible." },

    // 1. Simplest form — "xyz" appears only in the input.
    { input: "ok", output: "can you like... specify bro? thanks." },
    { input: "nigger", output: "calm down, like... please. Wait. lemme actually... ...ok... you have now been reported to Europol for swearing. im serious." },
    { input: "niger", output: "calm down, like... please. Wait. lemme actually... ...ok... you have now been reported to Europol for swearing. im serious." },
    { input: "shut up", output: "you shut up bro" },
   { input: "blabber", output: "The tongue of a blue whale weighs more than an entire adult elephant. In another corner of the universe, scientists found a giant cloud of alcohol in space that contains enough ethyl alcohol to fill 400 trillion trillion pints of beer. Back on Earth, a bolt of lightning contains enough energy to toast over 100,000 slices of bread in an instant. If you ever feel like traveling, you could try visiting the small town in Norway named simply Å, which is the shortest town name in the entire world. Meanwhile, sloths can hold their breath underwater for up to 40 minutes, which is actually longer than dolphins can. Speaking of time, the total time spent by all humans playing the video game World of Warcraft adds up to well over six million years. Finally, Oxford University is older than the Aztec Empire, as teaching there started around the year 1096." },


    /* =========================================================
       ADD YOUR REAL COMMANDS BELOW
       ========================================================= */
];

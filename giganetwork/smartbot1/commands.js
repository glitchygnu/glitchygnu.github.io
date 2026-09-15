/* =========================================================
   COMMAND DATABASE
   ---------------------------------------------------------
   "input"  = what the user types (exact match, case-insensitive)
   "output" = what the relay prints back (use \n for new lines)

   Aliases (misspellings) share the same output string.
   `help` and `clear` are handled by the engine directly.
   ========================================================= */

const commands = [

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

    /* =========================================================
       ADD NEW COMMANDS BELOW
       ---------------------------------------------------------
       {
           input:  "your command",
           output: "Your response",
       },
       ========================================================= */
];

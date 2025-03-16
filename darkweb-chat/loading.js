document.addEventListener("DOMContentLoaded", function () {
    const terminalOutput = document.getElementById("terminalOutput");

    const messages = [
        "Initializing secure connection...",
        "ACCESS GRANTED...",
        "Connecting to TOR network...",
        "Routing through relay node [XXX.XXX.XXX.XXX]...",
        "Encrypting traffic using AES-256...",
        "Generating RSA key pair...",
        "Loading onion network configuration...",
        "Establishing secure tunnel...",
        "Tunneling through exit node [XXX.XXX.XXX.XXX]...",
        "Verifying encryption handshake...",
        "Downloading darknet routing table...",
        "Checking for surveillance scripts...",
        "Spoofing MAC address...",
        "Hiding network fingerprint...",
        "Loading encrypted darknet modules...",
        "Establishing secondary relay through proxy...",
        "Bypassing firewall restrictions...",
        "Injecting stealth protocol...",
        "Accessing secure hidden services...",
        "Decryption sequence initiated...",
        "Validating hidden service descriptor...",
        "Retrieving server authentication keys...",
        "Connecting to anonymous relay chain...",
        "Secure tunnel established...",
        "Encrypting all outgoing requests...",
        "Finalizing handshake with onion network...",
        "TOR circuit established successfully...",
        "Loading encrypted chat client...",
        "Validating cryptographic signatures...",
        "Obfuscating network traces...",
        "Darknet connection secured.",
        "Accessing deep web nodes...",
        "Verifying user authenticity...",
        "Establishing quantum-resistant encryption...",
        "Injecting dummy packets to avoid tracing...",
        "Authenticating session...",
        "Routing through additional exit node...",
        "Performing deep packet inspection bypass...",
        "Security check: Passed...",
        "Cross-checking connection stability...",
        "Finalizing access procedures...",
        "Verifying onion v3 authentication...",
        "Obscuring device metadata...",
        "Masking IP address with triple-layer proxy...",
        "Connection to the dark web complete."
    ];

    function getRandomIP() {
        return `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
    }

    function getRandomNumbers() {
        let numbers = "";
        for (let i = 0; i < 12; i++) {
            numbers += Math.floor(Math.random() * 10);
            if (i % 4 === 3) numbers += " ";
        }
        return numbers;
    }

    let index = 0;

    function displayNextLine() {
        if (index < messages.length) {
            let line = messages[index].replace(/\[XXX\.XXX\.XXX\.XXX\]/g, `[${getRandomIP()}]`);
            terminalOutput.textContent += line + "\n";
            index++;
            terminalOutput.scrollTop = terminalOutput.scrollHeight; // Auto-scroll effect
            setTimeout(displayNextLine, Math.random() * 150 + 50); // Random delay for realism
        } else {
            let count = 0;
            let interval = setInterval(() => {
                terminalOutput.textContent += `${getRandomIP()} | ${getRandomNumbers()} | ${getRandomNumbers()} | ${getRandomNumbers()}\n`;
                terminalOutput.scrollTop = terminalOutput.scrollHeight;
                count++;

                if (count > 20) { // Show this effect for a while before redirecting
                    clearInterval(interval);
                    setTimeout(() => {
                        window.location.href = "index.html"; // Redirect to the actual chat page
                    }, 1500);
                }
            }, 100);
        }
    }

    displayNextLine();
});

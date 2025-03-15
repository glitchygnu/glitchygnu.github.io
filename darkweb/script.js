document.addEventListener("DOMContentLoaded", function() {
    // Play eerie background sound
    let audio = document.getElementById("background-sound");
    if (audio) {
        audio.volume = 0.3;
        audio.play();
    }

    // Generate fake IP address
    let ipDisplay = document.getElementById("ip-address");
    if (ipDisplay) {
        let fakeIP = "192.168." + Math.floor(Math.random() * 255) + "." + Math.floor(Math.random() * 255);
        ipDisplay.textContent = "Your IP Address: " + fakeIP;
    }
});

// Function to show fake terminal hacking animation
function initiateConnection(event) {
    event.preventDefault();
    document.body.innerHTML = `<pre id="terminal"></pre>`;
    let terminal = document.getElementById("terminal");
    
    let code = [
        "Connecting to Dark Web...",
        "Routing through anonymous nodes...",
        "Establishing end-to-end encryption...",
        "Accessing underground network...",
        "WARNING: Unauthorized access detected...",
        "Entering Hidden Market..."
    ];

    let i = 0;
    function typeCode() {
        if (i < code.length) {
            terminal.innerHTML += code[i] + "\n";
            i++;
            setTimeout(typeCode, 1000);
        } else {
            window.location.href = "marketplace.html";
        }
    }
    
    typeCode();
}

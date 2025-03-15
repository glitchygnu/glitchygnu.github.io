document.addEventListener("DOMContentLoaded", function () {
    const ipDisplay = document.getElementById("ip-address");

    fetch("https://api64.ipify.org?format=json")
        .then(response => response.json())
        .then(data => {
            ipDisplay.textContent = data.ip;
        })
        .catch(() => {
            ipDisplay.textContent = "Unknown";
        });

    const terminalText = `
🔍 CONNECTING TO DARKNET...
📡 NODE SECURED
⚠ WARNING: GOVERNMENT TRACKING DETECTED
🔓 ENCRYPTION BYPASSED
LOADING .onion HISTORY...
███ ███ ███ ███ ███
`;
    
    let index = 0;
    const terminal = document.getElementById("terminal-text");

    function typeEffect() {
        if (index < terminalText.length) {
            terminal.innerHTML += terminalText.charAt(index);
            index++;
            setTimeout(typeEffect, 50);
        }
    }

    setTimeout(typeEffect, 1000);
});

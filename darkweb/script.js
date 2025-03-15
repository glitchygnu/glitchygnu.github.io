const terminalText = `
██████╗  █████╗ ██████╗ ██╗  ██╗    ███████╗██╗    ██╗███████╗
██╔══██╗██╔══██╗██╔══██╗██║  ██║    ██╔════╝██║    ██║██╔════╝
██║  ██║███████║██████╔╝███████║    █████╗  ██║ █╗ ██║███████╗
██║  ██║██╔══██║██╔═══╝ ██╔══██║    ██╔══╝  ██║███╗██║╚════██║
██████╔╝██║  ██║██║     ██║  ██║    ██║     ╚███╔███╔╝███████║
╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝  ╚═╝    ╚═╝      ╚══╝╚══╝ ╚══════╝
 
CONNECTING TO DARKNET NODE...
ACCESSING DATABASE...
DECRYPTING PAYLOAD...
WARNING: UNAUTHORIZED ENTRY DETECTED
TRACKING IP ADDRESS...
LOCATION: UNKNOWN
ANONYMOUS NETWORK SECURED
`;

let index = 0;
const speed = 50; // Typing speed in milliseconds
const terminal = document.getElementById("terminal-text");

function typeEffect() {
    if (index < terminalText.length) {
        terminal.innerHTML += terminalText.charAt(index);
        index++;
        setTimeout(typeEffect, speed);
    } else {
        terminal.innerHTML += "\n\n> ACCESS GRANTED\n> WELCOME TO THE DARK WEB";
    }
}

window.onload = () => {
    setTimeout(typeEffect, 1000);
};

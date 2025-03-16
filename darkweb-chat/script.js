// Glitch effect on hover for all links
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("mouseover", () => {
        link.style.textShadow = "0px 0px 15px red";
        link.style.color = "red";
    });
    link.addEventListener("mouseout", () => {
        link.style.textShadow = "0px 0px 5px #00ff00";
        link.style.color = "#00ff00";
    });
});

// Simulated encrypted loading text effect
function simulateEncryptionText(element, text, speed = 50) {
    let encryptedText = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()";
    
    for (let i = 0; i < text.length; i++) {
        encryptedText += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    
    element.innerText = encryptedText;
    let i = 0;
    
    let interval = setInterval(() => {
        if (i < text.length) {
            encryptedText = encryptedText.substring(0, i) + text[i] + encryptedText.substring(i + 1);
            element.innerText = encryptedText;
            i++;
        } else {
            clearInterval(interval);
        }
    }, speed);
}

document.addEventListener("DOMContentLoaded", () => {
    const heading = document.querySelector("h1");
    if (heading) simulateEncryptionText(heading, heading.innerText);
});

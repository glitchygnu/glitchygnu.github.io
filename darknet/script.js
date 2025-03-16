document.addEventListener("DOMContentLoaded", function () {
    let loadingScreen = document.getElementById("loading-screen");
    let loadingText = document.getElementById("loading-text");
    
    if (loadingText) {
        let lines = [
            "[Connecting to Tor Network...]",
            "[Establishing Secure Connection...]",
            "[Loading Hidden Services...]",
            "[Routing through Nodes...]",
            "[Generating Encryption Keys...]",
            "[Connection Established]"
        ];

        let i = 0;
        let interval = setInterval(() => {
            if (i < lines.length) {
                loadingText.innerText += lines[i] + "\n";
                i++;
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    loadingScreen.style.display = "none";
                }, 1000);
            }
        }, 800);
    }
});

function sendMessage() {
    let message = document.getElementById("message").value;
    let chatBox = document.getElementById("chat-box");

    if (message.trim() !== "") {
        chatBox.innerHTML += "<p><b>Anonymous:</b> " + message + "</p>";
        document.getElementById("message").value = "";
    }
}

function sendGroupMessage() {
    let message = document.getElementById("group-message").value;
    let chatBox = document.getElementById("group-chat-box");

    if (message.trim() !== "") {
        chatBox.innerHTML += "<p><b>Anonymous:</b> " + message + "</p>";
        document.getElementById("group-message").value = "";
    }
}

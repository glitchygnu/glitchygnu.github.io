document.addEventListener("DOMContentLoaded", function () {
    let dots = document.getElementById("dots");
    setInterval(() => {
        dots.innerText = dots.innerText.length < 3 ? dots.innerText + "." : "";
    }, 500);

    document.getElementById("command").addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            let cmd = this.value.toLowerCase();
            let terminal = document.querySelector(".terminal");
            let newLine = document.createElement("p");

            if (cmd === "/connect") {
                newLine.innerHTML = "> Establishing encrypted connection...";
                document.getElementById("onion-popup").style.display = "block";
                document.querySelector(".progress-fill").style.width = "100%";

                setTimeout(() => {
                    document.getElementById("onion-popup").style.display = "none";
                    document.getElementById("main-interface").style.display = "none";
                    document.getElementById("darkweb-browser").style.display = "block";
                }, 5000);
            } else {
                newLine.innerHTML = "> Unknown command.";
            }

            terminal.appendChild(newLine);
            this.value = "";
            terminal.scrollTop = terminal.scrollHeight;
        }
    });
});

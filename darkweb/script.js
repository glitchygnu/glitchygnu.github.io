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

            if (cmd === "help") {
                newLine.innerHTML = "> Commands: <span class='green'>help, exit, hack</span>";
            } else if (cmd === "hack") {
                newLine.innerHTML = "> Initiating attack... <span class='green'>[ACCESS GRANTED]</span>";
            } else if (cmd === "exit") {
                newLine.innerHTML = "> Disconnecting... Goodbye.";
            } else {
                newLine.innerHTML = "> Unknown command.";
            }

            terminal.appendChild(newLine);
            this.value = "";
            terminal.scrollTop = terminal.scrollHeight;
        }
    });
});

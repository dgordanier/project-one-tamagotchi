// Click start button
let start = document.getElementById("start")

let name = document.getElementById("charName")

let btn = document.createElement("button");
    btn.innerHTML = "Click to Begin";
    start.appendChild(btn);

btn.addEventListener("click", (event) => {
    event.preventDefault();
    const input = window.prompt("Enter Character Name"); // prompt for character name
    if (input !== null && input !== "") {
    btn.style.visibility = "hidden";
    name.innerHTML = `<p>${input}<br>the Elf</p>`;// character name appears in display
    const elf = document.getElementById("elf");
    elf.innerHTML = "<img src = ./images/elf.png>";
    elf.style.position = "relative";
    } else {
        return
    }
});

// const elf = document.getElementById("elf");
// elf.style.height = 10px;

//name.addEventListener()

// Elf graphic appears

// display metrics (hunger, sleepiness, boredom, age) scale of 1-10

// add buttons (feed, turn off lights, play)

// increase (hunger, sleepiness, boredom,) metrics on interval

// increase age every x minutes

// morph at certain age

// die if any metric hits 10

// restart game
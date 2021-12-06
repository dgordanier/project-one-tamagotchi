// / / / / /\ \ \ \ \ \\
//      VARIABLES     \\
// / / / / /\ \ \ \ \ \\
const start = document.getElementById("start");

const elf = document.getElementById("elf");

const display = document.getElementsByClassName("display");

const charName = document.getElementById("charName");

const bars = document.getElementsByClassName("bars");

const hungerBar = document.getElementById("hungerBar");

const sleepyBar = document.getElementById("sleepyBar");

const boredBar = document.getElementById("boredBar");

const feed = document.getElementById("feed");

const sleep = document.getElementById("sleep");

const play = document.getElementById("play");

let hungerWidth = 0;

let sleepWidth = 0;

let boredWidth = 0;

// / / / / /\ \ \ \ \ \\
//     START BUTTON   \\
// / / / / /\ \ \ \ \ \\
const btn = document.createElement("button");
    btn.innerHTML = "Click to Begin";
    start.appendChild(btn);

begin = btn.addEventListener("click", (event) => {
    event.preventDefault();
    const input = window.prompt("Enter Character Name"); // prompt for character name
    if (input !== null && input !== "") {
    btn.style.visibility = "hidden";
    charName.innerHTML = `<p>Elf<br>${input}</p>`; // character name appears in display
    }else {
        return
    }

    // / / / / /\ \ \ \ \ \\
    //  ENTER  CHARACTER  \\
    // / / / / /\ \ \ \ \ \\
    elf.innerHTML = "<img src = ./images/elf.png>"; // Elf graphic appears

    // / / / / /\ \ \ \ \ \\
    //    START  TIMER    \\`12
    // / / / / /\ \ \ \ \ \\
    const gameStartTime = new Date().getTime();
        
    let globalTimer = setInterval(function() {
        let now = new Date().getTime();
        let milli = now - gameStartTime;
        let seconds = Math.floor((milli%(1000*60))/1000);
        // constantly gets a new time after the start of the game in milliseconds and converts it to seconds
        // ages the pet by 1 every 10 seconds && console.log for debugging
        // if (seconds%5 === 0) {pet.age++;}
        }, 1000);

    // / / / / /\ \ \ \ \ \\
    //  DISPLAY  METRICS  \\
    // / / / / /\ \ \ \ \ \\
    let hungerStatus = setInterval(function() {
        hungerWidth = hungerWidth + 5;
        hungerBar.style.width = hungerWidth + "%";
        if (hungerWidth >= 100) {
            clearInterval(hungerStatus);
        }
    }, 500);

    let sleepStatus = setInterval(function() {
        sleepWidth = sleepWidth + 5;
        sleepBar.style.width = sleepWidth + "%";
        if (sleepWidth >= 100) {
            clearInterval(sleepStatus);
        }
    }, 700);

    let boredStatus = setInterval(function() {
        boredWidth = boredWidth + 6;
        boredBar.style.width = boredWidth + "%";
        if (boredWidth >= 100) {
            clearInterval(boredStatus);
        }
    }, 1000);
});

// / / / / /\ \ \ \ \ \\
//     STATUS BARS    \\
// / / / / /\ \ \ \ \ \\

// add buttons (feed, turn off lights, play)

// increase (hunger, sleepiness, boredom,) metrics on interval

// increase age every x minutes

// morph at certain age

// die if any metric hits 10

// restart game
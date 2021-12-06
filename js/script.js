// / / / / /\ \ \ \ \ \\
//      VARIABLES     \\
// / / / / /\ \ \ \ \ \\
const start = document.getElementById("start");

const elf = document.getElementById("elf");

const snowman = document.getElementById("snowman");

const display = document.getElementsByClassName("display");

const charName = document.getElementById("charName");

const age = document.getElementById("age")

const icons = document.getElementById("icons")

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
    age.innerHTML = "<p>AGE:</p>"
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
        a = 0;
        if (seconds%40 === 0) {
            levelUp = a + 1;
            age.innerHTML = `<p>AGE:${levelUp}</p>`;
        }
        if (seconds >= 120) {
            clearInterval(hungerStatus);
            clearInterval(sleepStatus);
            clearInterval(boredStatus);
            clearInterval(globalTimer);
        }
        }, 1000);
        
    // / / / / /\ \ \ \ \ \\
    //  DISPLAY  METRICS  \\
    // / / / / /\ \ \ \ \ \\
    let hungerStatus = setInterval(function() {
        hungerWidth = hungerWidth + 5;
        hungerBar.style.width = hungerWidth + "%";
        if (hungerWidth >= 100) {
            clearInterval(hungerStatus);
            clearInterval(sleepStatus);
            clearInterval(boredStatus);
            clearInterval(globalTimer);
            elf.innerHTML = "";
        }
    }, 500);

    let sleepStatus = setInterval(function() {
        sleepWidth = sleepWidth + 5;
        sleepBar.style.width = sleepWidth + "%";
        if (sleepWidth >= 100) {
            clearInterval(hungerStatus);
            clearInterval(sleepStatus);
            clearInterval(boredStatus);
            clearInterval(globalTimer);
        }
    }, 700);

    let boredStatus = setInterval(function() {
        boredWidth = boredWidth + 6;
        boredBar.style.width = boredWidth + "%";
        if (boredWidth >= 100) {
            clearInterval(hungerStatus);
            clearInterval(sleepStatus);
            clearInterval(boredStatus);
            clearInterval(globalTimer);
        }
    }, 1000);
});

// / / / / /\ \ \ \ \ \\
//       BUTTONS      \\
// / / / / /\ \ \ \ \ \\
feed.addEventListener("click", (event) => {
    event.preventDefault();
    if (hungerWidth > 0) {
        hungerWidth = hungerWidth - 10;
    }else (event = false)
});

sleep.addEventListener("click", (event) => {
    event.preventDefault();
    if (sleepWidth > 0) {
        sleepWidth = sleepWidth - 5;
    }else (event = false);
});

play.addEventListener("click", (event) => {
    event.preventDefault();
    if (boredWidth > 0) {
        boredWidth = boredWidth - 6;
    }else (event = false);
});

// increase age every x minutes

// morph at certain age

// die if any metric hits 10

// restart game
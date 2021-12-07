// / / / / /\ \ \ \ \ \\
//      VARIABLES     \\
// / / / / /\ \ \ \ \ \\
const background = document.getElementById("background");

background.innerHTML = "<img src = ./images/background.png>";

const start = document.getElementById("start");

const elf = document.getElementById("elf");

const snowman = document.getElementById("snowman");

const santa = document.getElementById("santa");

const message = document.getElementById("message");

const display = document.getElementsByClassName("display");

const charName = document.getElementById("charName");

const age = document.getElementById("age");

const playButtons = document.getElementById("playButtons");

const bars = document.getElementsByClassName("bars");

const hungerBar = document.getElementById("hungerBar");

const sleepyBar = document.getElementById("sleepyBar");

const boredBar = document.getElementById("boredBar");

const feed = document.getElementById("feed");

const sleep = document.getElementById("sleep");

const play = document.getElementById("play");

let displayAge = 0;

let hungerWidth = 0;

let sleepWidth = 0;

let boredWidth = 0;

// / / / / /\ \ \ \ \ \\
//     START BUTTON   \\
// / / / / /\ \ \ \ \ \\
const btn = document.createElement("button");
    btn.innerHTML = "Click to Begin";
    start.appendChild(btn);

let begin = btn.addEventListener("click", (event) => {
    event.preventDefault();
    let input = window.prompt("Enter Character Name"); // prompt for character name
    if (input !== null && input !== "") {
    btn.style.visibility = "hidden";
    charName.innerHTML = `<h4>ELF:<br>${input}</h4>`; // character name appears in display
    }else {
        return
    }

    // / / / / /\ \ \ \ \ \\
    //  ENTER  CHARACTER  \\
    // / / / / /\ \ \ \ \ \\
    elf.innerHTML = "<img src = ./images/elf.png>"; // Elf graphic appears
    elf.style.width = "5%";

    // / / / / /\ \ \ \ \ \\
    //    START  TIMER    \\
    // / / / / /\ \ \ \ \ \\
    const gameStartTime = new Date().getTime();
        
    let ageTimer = setInterval(function() {
        displayAge = displayAge + 1;
        if (displayAge < 20) {
            age.innerHTML = "<h4>AGE:<br>0</h4>";
        }else if (displayAge%20 === 0) {
            let levelUp = displayAge / 20;
            age.innerHTML = `<h4>AGE:<br>${levelUp}</h4>`;
            elf.style.width = levelUp * 10 + "%"
        }
        if (displayAge >= 60) {
            clearInterval(hungerStatus);
            clearInterval(sleepStatus);
            clearInterval(boredStatus);
            clearInterval(ageTimer);
            elf.innerHTML = "";
            snowman.innerHTML = "<img src = ./images/Evil_Snowman.png>";
            feed.style.visibility = "hidden";
            sleep.style.visibility = "hidden";
            play.style.visibility = "hidden";
            message.innerHTML = "SANTA BEWARE!!!<br>EVIL ELF LIVES"
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
                clearInterval(ageTimer);
                elf.innerHTML = "";
                santa.innerHTML = "<img src = ./images/smoking_santa.png>";
                feed.style.visibility = "hidden";
                sleep.style.visibility = "hidden";
                play.style.visibility = "hidden";
                message.innerHTML = "<h2>SANTA CAN RELAX<br>EVIL ELF HAS DIED</h2>";
            }
        }, 500);

        let sleepStatus = setInterval(function() {
            sleepWidth = sleepWidth + 5;
            sleepBar.style.width = sleepWidth + "%";
            if (sleepWidth >= 100) {
                clearInterval(hungerStatus);
                clearInterval(sleepStatus);
                clearInterval(boredStatus);
                clearInterval(ageTimer);
                elf.innerHTML = "";
                santa.innerHTML = "<img src = ./images/smoking_santa.png>";
                feed.style.visibility = "hidden";
                sleep.style.visibility = "hidden";
                play.style.visibility = "hidden";
                message.innerHTML = "<h2>SANTA CAN RELAX<br>EVIL ELF HAS DIED</h2>";
            }
        }, 700);

        let boredStatus = setInterval(function() {
            boredWidth = boredWidth + 6;
            boredBar.style.width = boredWidth + "%";
            if (boredWidth >= 100) {
                clearInterval(hungerStatus);
                clearInterval(sleepStatus);
                clearInterval(boredStatus);
                clearInterval(ageTimer);
                elf.innerHTML = "";
                santa.innerHTML = "<img src = ./images/smoking_santa.png>";
                feed.style.visibility = "hidden";
                sleep.style.visibility = "hidden";
                play.style.visibility = "hidden";
                message.innerHTML = "<h2>SANTA CAN RELAX<br>EVIL ELF HAS DIED</h2>";
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
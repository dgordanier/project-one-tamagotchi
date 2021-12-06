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
    //    START  TIMER    \\
    // / / / / /\ \ \ \ \ \\
    const gameStartTime = new Date().getTime();
        
    let globalTimer = setInterval(function() {
        let now = new Date().getTime();
        let milli = now - gameStartTime;
        let seconds = Math.floor((milli%(1000*60))/1000);
        // constantly gets a new time after the start of the game in milliseconds and converts it to seconds
        // ages the pet by 1 every 10 seconds && console.log for debugging
        // if (seconds%5 === 0) {pet.age++;}
        // console.log(age of pet is ${pet.age});
        }, 1000);
    
    let hungerStatus = setInterval(function() {
        let now = new Date().getTime();
        let milli = now - gameStartTime;
        let seconds = Math.floor((milli%(1000*60))/1000);
        if (seconds < 11) {
            hungerBar.style.width = `${seconds * 10}%`;
        }else (clearInterval(hungerStatus));
        }, 1000);
    
    let sleepStatus = setInterval(function() {
        let now = new Date().getTime();
        let milli = now - gameStartTime;
        let seconds = Math.floor((milli%(1000*60))/1000);
        if (seconds < 6) {
            sleepBar.style.width = `${seconds * 20}%`;
        }else (clearInterval(sleepStatus))
        }, 1000);

    let boredStatus = setInterval(function() {
        let now = new Date().getTime();
        let milli = now - gameStartTime;
        let seconds = Math.floor((milli%(1000*60))/1000);
        if (seconds < 5) {
            boredBar.style.width = `${seconds * 25}%`;
        }else (clearInterval(boredStatus))
        }, 1000);
});

// / / / / /\ \ \ \ \ \\
//     STATUS BARS    \\
// / / / / /\ \ \ \ \ \\

// display metrics (hunger, sleepiness, boredom, age) scale of 1-10

// add buttons (feed, turn off lights, play)

// increase (hunger, sleepiness, boredom,) metrics on interval

// increase age every x minutes

// morph at certain age

// die if any metric hits 10

// restart game
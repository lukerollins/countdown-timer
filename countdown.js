let countdown;/*
const timerDisplay = document.querySelector('.display__time-left');
const completeMission = document.querySelector('.mission_complete');
const alarm = new Audio("QI Klaxon Sound Effect.mp3")
let seconds = document.querySelector('[name="seconds"]').value;



function timer(seconds) {

    clearInterval(countdown);


    //var now = Date.now();
    //var then = now + seconds * 1000;
    //runs displayTimeLeft once immediately
    displayTimeLeft(seconds);
    //displayMissionComplete(then);
    
    countdown = setInterval(() => {
       //const secondsLeft = Math.round(seconds * 1000);
        const secondsLeft = seconds * 1000;
       if(secondsLeft < 0) {
           clearInterval(countdown);
           document.title = "Alert On!"
           timerDisplay.textContent = "Count Over!";
           alarm.loop = true
           alarm.volume = 0.1
           alarm.play();
           return;
       }
       displayTimeLeft(secondsLeft);
    }, 1000);
}
    //running it again. The first time above was to prevent the one second
    //delay that would happen if just ran it here
function displayTimeLeft() {
    var minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    timerDisplay.textContent = display;
    console.log(display);
}
/*
function displayMissionComplete(timestamp) {
    const done = new Date(timestamp);
    const hour = done.getHours();
    const adjustHr = hour > 12 ? hour - 12 : hour;
    const minutes = done.getMinutes();
    completeMission.textContent = `Complete Level By ${adjustHr}:${minutes < 10 ? '0' : ''}${minutes}!!`;
}*/


/*function startTimer() {
    //seconds = parseInt(this.time);
    timer(seconds);
}

//clears the timer as well as shutting the alarm
function clearing() {
    timerDisplay.textContent = " ";
    completeMission.textContent = " ";
    document.title = "Countdown Timer";
    alarm.pause();
    clearInterval(countdown);
}

document.getElementById('reset_button').addEventListener('click', function (e) {
    e.preventDefault();
    clearing();
});
document.getElementById('start_button').addEventListener('click', startTimer);
document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    //const mins = this.minutes.value;
    //timer(mins * 60);
    //timer(seconds)
    this.reset();
});*/

let seconds = document.querySelector('[name="seconds"]').value;
let minutes = document.querySelector('[name="minutes"]').value;
let hours = document.querySelector('[name="hours"]').value;
let timerDisplay = document.querySelector('.display__time-left');

function timer() {
    
    clearInterval(countdown)
    //var remainingSeconds = seconds; 
    displayRemainingTime(seconds)
    //clearInterval(countdown)
    //displayRemainingTime(remainingSeconds)
    countdown = setInterval(() => {
        seconds--
        if (seconds < 0) {
            clearInterval(countdown);
            document.title = "Alert On!"
            timerDisplay.textContent = "Count Over!";
            return
        }
        displayRemainingTime()
    }, 1000)
}

function displayRemainingTime() {
    const display = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    timerDisplay.textContent = display;
    document.title = display;
    console.log(seconds)
}

function clearing() {
    timerDisplay.textContent = " ";
    //completeMission.textContent = " ";
    document.title = "Countdown Timer";
    //alarm.pause();
    clearInterval(countdown);
}


document.getElementById('reset_button').addEventListener('click', (e) => {
    e.preventDefault();
    clearing();
    });

document.getElementById('start_button').addEventListener('click', timer);
document.customForm.addEventListener('submit', function(e) {
        e.preventDefault();
        //const mins = this.minutes.value;
        //timer(mins * 60);
        timer(seconds)
        
        this.reset();
});
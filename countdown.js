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


let timerDisplay = document.querySelector('.display__time-left');
let customForm = document.querySelector('[name="customForm"]');





function displayRemainingTime() {
    var hoursLeft = Math.floor(secondsLeft / 3600)
    //var remainingHours = hoursLeft % 60;
    //var adjustHr = hour > 12 ? hour - 12 : hour;
    var minutesLeft = Math.floor(secondsLeft / 60);
    var remainingMinutes = minutesLeft % 60;
    var remainingSeconds = secondsLeft % 60;
    let display = `${hoursLeft < 10 ? '0' : ''}${hoursLeft}:${remainingMinutes < 10 ? '0' : ''}${remainingMinutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    timerDisplay.textContent = display;
    document.title = display;
    console.log(secondsLeft, display)
}

function clearing() {
    timerDisplay.textContent = " ";
    //completeMission.textContent = " ";
    document.title = "Countdown Timer";
    //alarm.pause();
    clearInterval(countdown);
}

function timer() {
    let seconds = document.querySelector('[name="seconds"]').value;
    let minutes = document.querySelector('[name="minutes"]').value;
    let hours = document.querySelector('[name="hours"]').value;
    secondsLeft = (hours * 3600) + (minutes * 60) + seconds;
    clearInterval(countdown)
    //var remainingSeconds = seconds; 
    displayRemainingTime(secondsLeft)
    //clearInterval(countdown)
    //displayRemainingTime(remainingSeconds)
    countdown = setInterval(() => {
        secondsLeft--
        if (secondsLeft < 0) {
            clearInterval(countdown);
            document.title = "Alert On!"
            timerDisplay.textContent = "Count Over!";
            return
        }
        displayRemainingTime()
    }, 1000)
}


document.getElementById('reset_button').addEventListener('click', (e) => {
    e.preventDefault();
    clearing();
    });

let onSubmit = function(e, secondsLeft, display) {
    e.preventDefault();
    timer(secondsLeft);
    displayRemainingTime(display)
    this.reset();
}    

//document.getElementById('start_button').addEventListener('click', timer);
customForm.addEventListener('submit', onSubmit);
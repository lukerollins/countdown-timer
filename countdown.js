let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const alarm = new Audio("QI Klaxon Sound Effect.mp3")


function timer(seconds) {

    clearInterval(countdown);


    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    
    countdown = setInterval(() => {
       const secondsLeft = Math.round((then - Date.now()) / 1000);
       if(secondsLeft < 0) {
           clearInterval(countdown);
           document.title = "Your alarm is going off!!!"
           timerDisplay.textContent = "Ding! Fries are done!!!";
           alarm.play();
           return;
       }
       displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    timerDisplay.textContent = display;
    console.log(display);
}

function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

function clearing() {
    timerDisplay.textContent = " ";
    //endTime.textContent = " ";
    document.title = "Stop! Reset!";
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
    const mins = this.minutes.value;
    timer(mins * 60);
    this.reset();
});
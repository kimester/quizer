//start button triggers timer and quiz starts
var startBtn = document.getElementById("start-btn");
var displayTimeEl = document.getElementById("displayTime")
var timer = 60;
var timerInterval;
//Declare some function
alert("Welcome to the Javascript Speeed Test")
startBtn.style.display = "none;"
//Start clock
timerInterval = setInterval(function() {
    timer = timer - 1

//Show time on the span
    displayTimeEl.textContent = timer;

//stop the clock
    if (timer ===0 ) {
        clearInterval(timerInterval);
        alert("Time's up!! ")

    }
//clear high scores
}
//DOM stands for Document Object Model 
//true 
//false

//NaN ==NaN
//true
//false

//Boolean values are...? 
// a. true/ false 
// b. only true if both the values given to it are true
// c. Is the only value in JS that is not equal to it self 

//submit high score with initials

//go back button ?
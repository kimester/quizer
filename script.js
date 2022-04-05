//grab button
var startBtn = document.getElementById("start-btn");
var displayTimeEl = document.getElementById("displayTime");
var timer = 10;
var timerInterval;
var QAScreenEl = document.getElementById("QAScreen");
var scoreboard = document.getElementById("scoreboard");
var points = 0;
var quizQuestions = [
  {
    question: "DOM stands for Document Object Model?",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question: "NaN ==NaN ",
    options: ["True", "False"],
    answer: "False",
  },
  // {
  //   question: "Boolean values are...??",
  //   options: [
  //     "true/ false statements",
  //     "only true if both the values given to it are true",
  //     "the only values in JS that is not equal to it self",
  //   ],
  //   answer: "true/false statements",
  // },
];
var index = 0;

//Declare some function
function startQuiz() {
  alert("Welcome to the Javascript Speeed Test");
  startBtn.style.display = "none";
  document.getElementById("startQuiz").style.display = "none";

  //Start clock
  timerInterval = setInterval(function () {
    timer--;

    //Show time on the span
    displayTimeEl.textContent = timer;

    //stop the clock
    if (timer === 0) {
      clearInterval(timerInterval);
      QAScreenEl.style.display = "none";
      alert("Time's up!! ");
      endGame();
    }
  }, 1000);
  //Unhide the QA section
  QAScreenEl.style.display = "block";
  //display Q and Options
  if (index <= 1) {
    showQA();
  } else {
    endGame();
  }
}

function showQA() {
  var currentQ = quizQuestions[index].question;
  document.getElementById("q1").textContent = currentQ;
  console.log(quizQuestions[index], index);
  //show the options
  console.log(index);
  document.getElementById("01").textContent = quizQuestions[index].options[0];
  document.getElementById("02").textContent = quizQuestions[index].options[1];
  //add event listener
  document.getElementById("01").addEventListener("click", RWAns);
  document.getElementById("02").addEventListener("click", RWAns);
  //set it to blank after 2 seconds
  setInterval(function () {
    document.getElementById("RW").textContent = "";
  }, 2000);

  // var currentQ = quizQuestions[index].question;
  // document.getElementById("q3").textContent = currentQ;
  // console.log(quizQuestions[index], index);
  // //show the options
  // document.getElementById("abc").textContent = quizQuestions[index].options[0];
  // document.getElementById("bca").textContent = quizQuestions[index].options[1];
  // document.getElementById("cab").textContent = quizQuestions[index].options[2];
  // //add event listener
  // document.getElementById("abc").addEventListener("click", a);
  // document.getElementById("bca").addEventListener("click", a);
  // document.getElementById("cab").addEventListener("click", a);
  // //set it to blank after 2 seconds
  // setInterval(function () {
  //   document.getElementById("a").textContent = "";
  // }, 2000);
}

//checking thr answers
function RWAns() {
  console.log("button clicked");

  var rightAnswer = quizQuestions[index].answer;
  console.log(rightAnswer);
  var buttonClicked = this.textContent;

  if (rightAnswer === buttonClicked) {
    document.getElementById("RW").textContent = "Right Answer";
    points = points + 2;
    console.log(points);
  } else {
    document.getElementById("RW").textContent = "Wrong Answer";
    points = points - 2;
    console.log(points);
  }
  //increase the index count by 1
  index = index + 1;
  //show the next question
  if (index <= 1) {
    showQA();
  } else {
    endGame();
  }
}

// function endGame() {
// clearInterval(displaytime)
// QAScreenEl.style.display = "none"
// }

// function a() {
//   console.log("button clicked");

//   var rightAnswer = quizQuestions[index].answer;
//   console.log(rightAnswer);
//   var buttonClicked = this.textContent;

//   if (rightAnswer === buttonClicked) {
//     document.getElementById("a").textContent = "Right Answer";
//   } else {
//     document.getElementById("a").textContent = "Wrong Answer";
//   }
//   document.getElementById("a").textContent = "Wrong Answer";
// }
// //increase the index count by 1
// index = index + 1;
// //show the next question
// showQA();

//EVENT LISTENER ****************

startBtn.addEventListener("click", startQuiz);

var scores = JSON.parse(localStorage.getItem("scores")) || [];

scores.forEach((score) => {
  var newli = document.createElement("li");
  newli.textContent = `${score.init} : ${score.score}`;
  document.querySelector("ol").append(newli);
});

function endGame() {
  startBtn.style.display = "block";
  startBtn.textContent = "Try Again?";
  timer = 10;
}
//DOM stands for Document Object Model
//true
//false

//NaN ==NaN
//true
//false

//Boolean values are...?
// a. true/ false statements
// b. only true if both the values given to it are true
// c. the only values in JS that is not equal to it self

//submit high score with initials
// console.log(quizQuestions[0]);
// console.log(quizQuestions[2].question);
// console.log(quizQuestions[2].options[0]);
// console.log(quizQuestions[2].options[1]);
// console.log(quizQuestions[2].options[2]);
// console.log(quizQuestions[2].options[3]);

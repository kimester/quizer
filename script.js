//grab button
var startBtn = document.getElementById("start-btn");
var displayTimeEl = document.getElementById("displayTime");
var timer = 60;
var timerInterval;
var QAScreenEl = document.getElementById("QAScreen");
var score = document.getElementById("score");
var points = 0;
// var score = document.getElementById("score");
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
  {
    question: "2+2",
    options: [2, 5, 4, 3],
    answer: 4,
  },
];
var index = 0;

//Declare some function
function startQuiz() {
  alert("Welcome to the Javascript Speeed Test");
  // startBtn.style.display = "none";
  document.getElementById("startQuiz").setAttribute("class", "hide");
  displayTimeEl.textContent = timer;
  //Start clock
  timerInterval = setInterval(function () {
    timer--;

    //Show time on the span
    displayTimeEl.textContent = timer;

    //stop the clock
    if (timer === 0) {
      
      endGame();
    }
  }, 1000);
  //Unhide the QA section
  QAScreenEl.removeAttribute("class");
  showQA()
}

function showQA() {
  var currentQ = quizQuestions[index];
  document.getElementById("q1").textContent = currentQ.question;

  //show the options


  document.getElementById("choices").innerHTML = "";

  currentQ.options.forEach((choice) => {
    var btn = document.createElement("button");
    btn.textContent = choice;

    btn.setAttribute("value", choice);
    btn.onclick = RWAns;

    document.getElementById("choices").append(btn);
  });
}

//checking thr answers
function RWAns() {
  // console.log("button clicked");

  var rightAnswer = quizQuestions[index].answer;
  console.log(rightAnswer);
  var buttonClicked = this.value;

  if (rightAnswer !== buttonClicked) {
    timer -= 10;
   
    if (timer < 0){
      timer = 0
    }


  }
  //increase the index count by 1
  index++;
  //show the next question
  if (index === quizQuestions.length) {
      endGame();
  } else {
  showQA();
  }
}




function endGame() {
  // startBtn.style.display = "block";
  // startBtn.textContent = "Try Again?";
  document.getElementById('score').removeAttribute('class')
  QAScreenEl.setAttribute("class", "hide");
  clearInterval(timerInterval);
}


// scores.forEach((score) => {
//   var newli = document.createElement("li");
//   newli.textContent = `${score.init} : ${score.score}`;
//   document.querySelector("ol").append(newli);
// });

function saveScore(e){
  e.preventDefault()
  var scores = JSON.parse(localStorage.getItem("score")) || [];

  var userScore = {
    score: timer,
    initials: document.getElementById('initialInput').value
  }

  scores.push(userScore)
  localStorage.setItem("score", JSON.stringify(scores) )
  
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


//EVENT LISTENER ****************

startBtn.addEventListener("click", startQuiz);
document.getElementById('initials').addEventListener('submit', saveScore)
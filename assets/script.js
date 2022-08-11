/** @format */

//variables declared

var startButton = document.getElementById("startBtn");
var div1 = document.querySelector(".box1");
var div2 = document.querySelector(".box2");
var div3 = document.querySelector(".box3");
var div4 = document.querySelector(".box4");
var div5 = document.querySelector(".box5");
var timer = document.querySelector("#timer");
var pfalse = document.querySelectorAll(".pfalse");
var finalScoreDiv = document.querySelector(".finalScore");
var finalTime = document.querySelector(".finalTime");
var p5true = document.querySelector("#p5true");
var p5false = document.querySelectorAll(".p5false");
var submitBtn = document.querySelector("#submit");
var p5true = document.querySelector("#p5true");
var scoreDisplay = document.querySelector("#scoreDisplay");
var scoreboard = document.querySelector("#scoreboard");
var currentTime = {};
var retryBtn = document.querySelector("#retryBtn");
var time;
startAgainButton = document.querySelector("#startAgainBtn");

//event listeners
//buttons
startButton.addEventListener("click", showDiv1, countdown);

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  if (initials === "") {
    console.log("yes");
    alert("error, initials cannot be blank");
    showScore();
  } else {
    alert("success, saved successfully");
    var initials = document.querySelector("#initials").value;
    localStorage.setItem("initials", initials);
    renderScoreboard();
  }
});

retryBtn.addEventListener("click", reveal);

startAgainButton.addEventListener("click", showDiv1, resetTimer);

//answer option event listeners

pfalse.forEach((element) => {
  element.addEventListener("click", (e) => {
    console.log("wrng clicked");
    timeLeft -= 10;
  });
});

p5false.forEach((element) => {
  element.addEventListener("click", (e) => {
    console.log("wrng clicked");
    timeLeft -= 10;
    pause_timer();
  });
});

p5true.addEventListener("click", pause_timer, showScore);


//functions for hiding/showing questions

function showDiv1() {
  div1.style.display = "flex";
  startButton.style.display = "none";
  startAgainButton.style.display = "none";
  scoreboard.style.display = "none";
  retryBtn.style.display = "none";
  countdown();
}

function showDiv2() {
  console.log("bye");
  div1.style.display = "none";
  div2.style.display = "flex";
}

function showDiv3() {
  console.log("bye");
  div2.style.display = "none";
  div3.style.display = "flex";
}

function showDiv4() {
  console.log("bye");
  div3.style.display = "none";
  div4.style.display = "flex";
}

function showDiv5() {
  console.log("bye");
  div4.style.display = "none";
  div5.style.display = "flex";
}

//input initials to save score to local storage
function showScore() {
  div5.style.display = "none";
  finalScoreDiv.style.display = "flex";
}

//pauses and resets time and saves time on clock as score
function pause_timer() {
  var currentTime = timeLeft;
  finalTime.textContent = "Your score is " + currentTime;
  timer.style.display = "none";
  finalTime.style.display = "flex";
  localStorage.setItem("currentTime", JSON.stringify(currentTime));
  clearInterval(time);
}

//countdown function
function countdown() {
  timeLeft = 60;
  time = setInterval(function () {
    if (timeLeft > 1) {
      timer.textContent = timeLeft + " seconds remaining";
      timeLeft--;
    } else if (timeLeft === 1) {
      timer.textContent = timeLeft + " second remaining";
      timeLeft--;
    }
    if (timeLeft === 0) {
      timer.textContent = "Time's up! Your score is 0";
      timer.style.margin = 0;
      pause_timer();
      showScore();
      div1.style.display = "none";
      div2.style.display = "none";
      div3.style.display = "none";
      div4.style.display = "none";
      div5.style.display = "none";
    }
  }, 1000);
}

//retrives last stored item and displays as saved score
function renderScoreboard() {
  var initials = localStorage.getItem("initials");
  var retrieveScore = localStorage.getItem("currentTime");
  scoreDisplay.textContent = retrieveScore + " : " + initials;
  finalScoreDiv.style.display = "none";
  scoreboard.style.display = "flex";
  retryBtn.style.display = "inline-block";
}
//shows start again button and hides score info
function reveal() {
  startAgainButton.style.display = "inline-block";
  finalTime.style.display = "none";
  finalScoreDiv.style.display = "none";
  scoreboard.style.display = "none";
  retryBtn.style.display = "none";
}
//starts timer over at 60 if user decides to try again
function resetTimer() {
  clearInterval(time);
  timer.style.display = "inline-block";
  timeLeft = 60;
  timeLeft--;
  timer.textContent = time + "seconds left";
  if (time) {
    renderScoreboard();
  }
  console.log("reset timer triggered");
}

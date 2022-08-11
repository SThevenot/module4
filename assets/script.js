/** @format */

//variables declared

var startButton = document.getElementById("startBtn");
var div1 = document.querySelector(".box1");
var div2 = document.querySelector(".box2");
var div3 = document.querySelector(".box3");
var div4 = document.querySelector(".box4");
var div5 = document.querySelector(".box5");
var timer = document.querySelector(".timer");
var pfalse = document.querySelectorAll(".pfalse");
var timeLeft = 60;
var finalScoreDiv = document.querySelector(".finalScore");
var finalTime = document.querySelector(".finalTime");
var p5true = document.querySelector("#p5true");
var p5false = document.querySelectorAll(".p5false");
var submitBtn = document.querySelector("#submit");
var p5true = document.querySelector("#p5true");
var scoreDisplay = document.querySelector("#scoreDisplay");
var scoreboard = document.querySelector("#scoreboard");
var currentTime = {};

//event listeners
startButton.addEventListener("click", showDiv1, countdown);

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

submitBtn.addEventListener("click", function(event) {
  event.preventDefault();
  var initials = document.querySelector("#initial").value;
  if (initials === "") {
    console.log("yes");
    alert("error, initials cannot be blank");
  } else {
    alert("success, saved successfully");
    localStorage.setItem("initials", initials);
    renderScoreboard();
  }
  })
  

//functions
function countdown() {
  timeLeft;
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timer.textContent = timeLeft + " seconds remaining";
      timeLeft--;
    } else if (timeLeft === 1) {
      timer.textContent = timeLeft + " second remaining";
      timeLeft--;
    } else {
      timer.textContent = "Time's up! Your score is 0";
      timer.style.margin = 0;
      showScore();

      //add in line of code to take user to scoreboard stuff when timer hits 0
    }
  }, 1000);
}

function showDiv1() {
  div1.style.display = "flex";
  startButton.style.display = "none";
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

//local storage such and score
function showScore() {
  div5.style.display = "none";
  finalScoreDiv.style.display = "flex";
}

function pause_timer() {
  var currentTime = timeLeft;
  finalTime.textContent = "Your score is " + currentTime;
  timer.style.display = "none";
  finalTime.style.display = "flex";
   localStorage.setItem("currentTime", JSON.stringify(currentTime));
}


function renderScoreboard() { 
var initials = localStorage.getItem("initials");
var retrieveScore = localStorage.getItem("currentTime");
scoreDisplay.textContent = retrieveScore + " - " + initials;
finalScoreDiv.style.display = "none";
scoreboard.style.display = "flex";
return;
}


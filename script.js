"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const showMessage = function(message){
  document.querySelector("message").textContent = message;
} 

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // when there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ no number!";

    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = guess;
    showMessage("Correct Number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
      showMessage(guess > secretNumber ? "Too high!" : "Too low!");
    } else {
      showMessage("You Lose!");
      document.querySelector(".score").textContent = 0;
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  showMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
});

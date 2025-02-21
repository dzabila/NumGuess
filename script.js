"use strict";

let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
// let message = document.querySelector(".message");
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
let scoreText = document.querySelector(".score");
let number = document.querySelector(".number");

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  //   when there is no input
  if (!guess) {
    displayMessage("No number");

    //WHen player wins
  } else if (guess === secretNumber) {
    number.textContent = String(guess);
    displayMessage("Correct Number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    number.style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
    score--;
    if (score < 0) {
      displayMessage("You lose!");
    } else {
      scoreText.textContent = String(score);
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  scoreText.textContent = String(score);
  document.querySelector(".guess").value = "";
  displayMessage("Start Guessing...");
  document.querySelector("body").style.backgroundColor = "#222";
  number.textContent = "?";
});

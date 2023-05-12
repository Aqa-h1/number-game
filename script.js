"use strict"

// Selecting all elements
const container = document.querySelector(".container");
const secretNumberEl = document.querySelector(".secret_number");
const guessInput = document.querySelector(".guess");
const messageEl = document.querySelector(".message");
const score = document.querySelector('.score');
const highestScore = document.querySelector('.high_score');
const guess = document.querySelector(".guesss");
// Selecting all btns
const btnReset = document.querySelector(".reset");
const btnCheck = document.querySelector(".check");
// Declearing all variables
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let userScore = 20
// secretNumberEl.textContent = secretNumber;

btnCheck.addEventListener("click", function () {
let userNumber = +guessInput.value;

  if (guessInput.value) {
    console.log("guessInput.value", guessInput.value);
    messageEl.textContent = "No Number";
  }
  if (userNumber < secretNumber) {
    messageEl.textContent = "Too low";
    userScore--
    score.textContent = userScore
    score.textContent = userScore
    score.textContent = userScore 
  }

  if (userNumber > secretNumber) {
    messageEl.textContent = "Too high";
    userScore--
    score.textContent = userScore
  }

  if (userNumber === secretNumber) {
    messageEl.textContent = "Correct Number!";
    container.style.backgroundColor = 'green'
    highestScore.textContent = userScore
  }
  if (userScore === 0) {
    guess.textContent = "Game Over"
    container.style.backgroundColor = 'red'
  }
});

btnReset.addEventListener('click', function() {
  userScore = 20
  score.textContent = userScore
  guessInput.value = ''
  secretNumberEl.textContent = '?'
  container.style.backgroundColor = 'black'
  messageEl.textContent = 'Start guessing...'
  secretNumber = Math.trunc(Math.random() * 20) + 1
})


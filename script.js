// DOM
const rockBtn = document.querySelector(".rock-btn");
const paperBtn = document.querySelector(".paper-btn");
const scissorsBtn = document.querySelector(".scissors-btn");
const results = document.querySelector(".results");

rockBtn.addEventListener("click", () => {
  const playerChoice = "rock";
  const computerChoice = getComputerChoice();
  round(playerChoice, computerChoice);
  console.log(playerChoice, computerChoice);
});
paperBtn.addEventListener("click", () => {
  const playerChoice = "paper";
  const computerChoice = getComputerChoice();
  round(playerChoice, computerChoice);
  console.log(playerChoice, computerChoice);
});
scissorsBtn.addEventListener("click", () => {
  const playerChoice = "scissors";
  const computerChoice = getComputerChoice();
  round(playerChoice, computerChoice);
  console.log(playerChoice, computerChoice);
});

// Game Logic

function randomNumber() {
  return Math.random();
}

function getComputerChoice() {
  let num = randomNumber();
  let computerChoice;

  if (num < 0.33) computerChoice = "rock";
  else if (num <= 0.66) computerChoice = "paper";
  else computerChoice = "scissors";

  //   console.log(computerChoice);

  return computerChoice;
}

let computerChoice = getComputerChoice();

// used for console game

// let playerChoice = prompt("Rock, Paper, or Scissors?");
// playerChoice = playerChoice.toLowerCase();
let playerWins = 0;
let computerWins = 0;

function round(playerChoice, computerChoice) {
  if (playerChoice === "rock" && computerChoice === "scissors") {
    playerWins++;
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    computerWins++;
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    playerWins++;
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    computerWins++;
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    playerWins++;
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    computerWins++;
  }

  console.log(playerWins, computerWins);

  results.textContent =
    playerWins > computerWins
      ? `You win ${playerChoice} beats ${computerChoice}`
      : playerWins === computerWins
      ? `You both chose ${playerChoice}`
      : `You lose ${computerChoice} beats ${playerChoice}`;

  if (playerWins === 5) {
    results.textContent = "You are smarter than the computer!";
    playerWins = 0;
    computerWins = 0;
  }
  if (computerWins === 5) {
    results.textContent = "Computers are going to take over the world";
    playerWins = 0;
    computerWins = 0;
  }
}

// best of 5 game - in console - to play, move playerWins and computerWins to global vars and uncomment below code

// function game() {
//   for (let i = 0; i < 5; i++) {
//     const computerChoice = getComputerChoice();
//     const playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();

//     round(computerChoice, playerChoice);
//     console.log(playerWins, computerWins);
//   }

//   console.log(playerWins > computerWins ? "You win" : "Computer win");
// }

// game();

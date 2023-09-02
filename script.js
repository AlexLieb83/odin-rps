function randomNumber() {
  return Math.random();
}

function getComputerChoice() {
  let num = randomNumber();
  let computerChoice;

  if (num < 0.33) computerChoice = "rock";
  else if (num <= 0.66) computerChoice = "paper";
  else computerChoice = "scissors";

  console.log(computerChoice);

  return computerChoice;
}

// let computerChoice = getComputerChoice();
// let playerChoice = prompt("Rock, Paper, or Scissors?");
// playerChoice = playerChoice.toLowerCase();

let playerWins = 0;
let computerWins = 0;

function round(playerChoice, computerChoice) {
  if (playerChoice === "rock" && computerChoice === "scissors") {
    return playerWins++;
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    return computerWins++;
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    return playerWins++;
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    return computerWins++;
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    return playerWins++;
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    return computerWins++;
  } else if (playerChoice === computerChoice) {
    return null;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const computerChoice = getComputerChoice();
    const playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();

    round(computerChoice, playerChoice);
    console.log(playerWins, computerWins);
  }

  console.log(playerWins > computerWins ? "You win" : "Computer win");
}

game();

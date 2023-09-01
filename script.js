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

let computerChoice = getComputerChoice();
let playerChoice = prompt("Rock, Paper, or Scissors?");
playerChoice = playerChoice.toLowerCase();

function round(playerChoice, computerChoice) {
  if (playerChoice === "rock" && computerChoice === "scissors") {
    return "You win. Rock beats Scissors";
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    return "You lose. Paper beats Rock";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    return "You win. Paper beats Rock";
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    return "You lose. Scissors beats Paper";
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    return "You win. Scissors beats Paper";
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    return "You lose. Rock beats Scissors";
  } else if (playerChoice === computerChoice) {
    return "You tied.";
  }
}

console.log(round(playerChoice, computerChoice));

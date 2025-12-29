//players score
let humanScore = 0;
let computerScore = 0;

let resultsMessage = "No Results!";
let humanScoreMessage = `You have ${humanScore} points`;
let computerScoreMessage = `Computer has ${computerScore} points`;

//get computer choice
function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * choices.length);

  return choices[randomIndex];
}

//play round
function playRound(humanChoice) {
  // let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();
  //rock - scissors - USER WINS
  //paper - rock - USER WINS
  //scissors - paper - USER WINS
  if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  ) {
    resultsMessage = `You win! ${humanChoice} beats ${computerChoice}`;
    humanScore += 1;
    humanScoreMessage = `You have ${humanScore} points`;
  }
  //rock - paper - COMP WINS
  //paper - scissors - COMP WINS
  //scissors - rock - COMP WINS
  else if (
    (computerChoice == "rock" && humanChoice == "scissors") ||
    (computerChoice == "paper" && humanChoice == "rock") ||
    (computerChoice == "scissors" && humanChoice == "paper")
  ) {
    resultsMessage = `You lose! ${computerChoice} beats ${humanChoice}`;
    computerScore += 1;
    computerScoreMessage = `Computer has ${computerScore} points`;
  } else {
    //rock - rock - TIE
    //paper - paper - TIE
    //scissors - scissors - TIE
    resultsMessage = `You tie! You both chose ${humanChoice}`;
  }

  if (humanScore >= 5) {
    resultsMessage = `GAME OVER. You win!`;
    messageP.textContent = resultsMessage;
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  } else if (computerScore >= 5) {
    resultsMessage = `GAME OVER. Computer wins!`;
    messageP.textContent = resultsMessage;
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  }
}

//RPS - UI
const rockBtn = document.getElementById("rock");

rockBtn.addEventListener("click", () => {
  playRound("rock");
  messageP.textContent = resultsMessage;
  humanScoreP.textContent = humanScoreMessage;
  computerScoreP.textContent = computerScoreMessage;
});

const paperBtn = document.getElementById("paper");

paperBtn.addEventListener("click", () => {
  playRound("paper");
  messageP.textContent = resultsMessage;
  humanScoreP.textContent = humanScoreMessage;
  computerScoreP.textContent = computerScoreMessage;
});

const scissorsBtn = document.getElementById("scissors");

scissorsBtn.addEventListener("click", () => {
  playRound("scissors");
  messageP.textContent = resultsMessage;
  humanScoreP.textContent = humanScoreMessage;
  computerScoreP.textContent = computerScoreMessage;
});

const messageP = document.getElementById("message");
messageP.textContent = resultsMessage;

const humanScoreP = document.getElementById("humanScore");
humanScoreP.textContent = humanScoreMessage;

const computerScoreP = document.getElementById("compScore");
computerScoreP.textContent = computerScoreMessage;

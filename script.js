//get computer choice
function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * choices.length);

  return choices[randomIndex];
}

//get human choice
function getHumanChoice() {
  const userChoice = prompt("Rock", "Paper", "Scissors").toLowerCase();

  return userChoice;
}

//players score
var humanScore = 0;
var computerScore = 0;

//play round
function playRound() {
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();
  //rock - scissors - USER WINS
  //paper - rock - USER WINS
  //scissors - paper - USER WINS
  if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    return "player";
  }
  //rock - paper - COMP WINS
  //paper - scissors - COMP WINS
  //scissors - rock - COMP WINS
  else if (
    (computerChoice == "rock" && humanChoice == "scissors") ||
    (computerChoice == "paper" && humanChoice == "rock") ||
    (computerChoice == "scissors" && humanChoice == "paper")
  ) {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    return "computer";
  } else {
    //rock - rock - TIE
    //paper - paper - TIE
    //scissors - scissors - TIE
    console.log(`You tie! You both chose ${humanChoice}`);
  }
}

//play full game -- 5 rounds
function playGame() {
  for (i = 0; i < 5; i++) {
    let result = playRound();

    if (result == "player") {
      humanScore += 1;
    } else if (result == "computer") {
      computerScore += 1;
    }

    console.log(`comp score: ${computerScore}`);
    console.log(`human score: ${humanScore}`);
  }

  return humanScore > computerScore ? "Human Wins" : "Computer Wins";
}

//so we can see the game in the console
console.log(playGame());

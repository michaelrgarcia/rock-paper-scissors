const playerSelection = prompt("Rock, paper, or scissors?");
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection.toLowerCase(), computerSelection.toLowerCase()));

function playRound(playerSelection, computerSelection) { 
        if (playerSelection === computerSelection) {
            return "Try again!";
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            return "You lose, paper beats rock!";
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            return "You win, rock beats paper!";
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            return "You win, paper beats rock!";
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            return "You lose, scissors beats paper!";
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            return "You lose, rock beats scissors!";
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            return "You win, scissors beats paper!";
        } else {
            return "Invalid input! Only rock, paper, or scissors are allowed!";
        }
}

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 1) {
        return "Rock";
    } else if (computerChoice === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}
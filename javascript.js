let computerScore = 0;
let playerScore = 0;

console.log(playRound());
console.log(`You: ${playerScore} \nConsole: ${computerScore}`);

console.log(playRound());
console.log(`You: ${playerScore} \nConsole: ${computerScore}`);

console.log(playRound());
console.log(`You: ${playerScore} \nConsole: ${computerScore}`);

console.log(playRound());
console.log(`You: ${playerScore} \nConsole: ${computerScore}`);

console.log(playRound());
console.log(`You: ${playerScore} \nConsole: ${computerScore}`);

if (playerScore > computerScore) {
    console.log("You win the game!");
} else if (playerScore === computerScore) {
    console.log("It's a tie!");
} else {
    console.log("Console wins the game!");
}

function playRound() { 
    const playerSelection = prompt("Rock, paper, or scissors?");
    const computerSelection = getComputerChoice();
        if (playerSelection === null || playerSelection === "") {
            return "You didn't input anything!";
        } else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
            return "Try again!";
        } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
            computerScore += 1;
            return "You lose, paper beats rock!";
        } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
            playerScore += 1;
            return "You win, rock beats paper!";
        } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
            playerScore += 1;
            return "You win, paper beats rock!";
        } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
            computerScore += 1;
            return "You lose, scissors beats paper!"; 
        } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
            computerScore += 1;
            return "You lose, rock beats scissors!"; 
        } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
            playerScore += 1;
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
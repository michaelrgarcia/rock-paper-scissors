const choicebtns = document.querySelectorAll(".choicebtns button");
const results = document.querySelector(".results");
const gamectrl = document.querySelectorAll(".gamectrl button");
const score = document.querySelector(".score");
let computerScore = 0;
let playerScore = 0;
let game = false;
let playerSelection = "";

gamectrl.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.className === "start") {
            game = true;
            results.textContent = "Pick one!";
        } else if (btn.className == "reset" && playerSelection != "") {
            results.textContent = "Pick one!";
            playerSelection = "";
            score.textContent = "";
            playerScore = 0;
            computerScore = 0;
        }
    });
});

choicebtns.forEach((btn) => {
    btn.addEventListener("click", () => {
    if (game) {
        if (btn.className === "rock") {
            playerSelection = "rock"
        } else if (btn.className === "paper") {
            playerSelection = "paper"
        } else if (btn.className === "scissors") {
            playerSelection = "scissors"
        }
        playRound();
        checkScore();
    }
    });
});

function playRound() {
    const computerSelection = getComputerChoice();
        if (playerSelection === computerSelection) {
            results.textContent = "You both picked the same option, pick again!";
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            computerScore += 1;
            results.textContent = `You lose, paper beats rock!`;
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            playerScore += 1;
            results.textContent = "You win, rock beats paper!";
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            playerScore += 1;
            results.textContent = "You win, paper beats rock!";
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            computerScore += 1;
            results.textContent = "You lose, scissors beats paper!"; 
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            computerScore += 1;
            results.textContent = "You lose, rock beats scissors!"; 
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            playerScore += 1;
            results.textContent = "You win, scissors beats paper!";
        }
}


function checkScore() {
    score.textContent = `\nYou: ${playerScore} Computer: ${computerScore}`;
    if (playerScore === 5 || computerScore === 5) {
        score.textContent = "Click 'Reset' to play again!";
        game = false;
        if (playerScore > computerScore) {
            results.textContent = "You win the game!";
        } else if (playerScore === computerScore) {
            results.textContent = "It's a tie!";
        } else {
            results.textContent = "Console wins the game!";
        }
    }
}

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 1) {
        return "rock";
    } else if (computerChoice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}
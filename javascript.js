const choicebtns = document.querySelectorAll(".choicebtns button");
const results = document.querySelector(".results");
const gamectrl = document.querySelectorAll(".gamectrl button");
let computerScore = 0;
let playerScore = 0;
let game = false;
let playerSelection = "";

/* for (let i = 0; i < 5; i++) {
    console.log(playRound());
    console.log(`You: ${playerScore} \nConsole: ${computerScore}`);
}

 if (playerScore > computerScore) {
    console.log("You win the game!");
} else if (playerScore === computerScore) {
    console.log("It's a tie!");
} else {
    console.log("Console wins the game!");
}

*/

gamectrl.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.className === "start") {
            game = true;
            results.textContent = "Pick one!";
        } else if (btn.className == "reset" && game) {
            playerSelection = "";
            results.textContent = "Pick one!";
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
        playRound2();
    }
    });
});

function playRound2() {
    const computerSelection = getComputerChoice();
        if (playerSelection === computerSelection) {
            results.textContent = "Try again!";
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            computerScore += 1;
            results.textContent = "You lose, paper beats rock!";
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

/* function playRound(playerSelection, computerSelection) { 
        if (playerSelection === null || playerSelection === "") {
            return "You didn't input anything!";
        } else if (playerSelection === computerSelection) {
            return "Try again!";
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            computerScore += 1;
            return "You lose, paper beats rock!";
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            playerScore += 1;
            return "You win, rock beats paper!";
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            playerScore += 1;
            return "You win, paper beats rock!";
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            computerScore += 1;
            return "You lose, scissors beats paper!"; 
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            computerScore += 1;
            return "You lose, rock beats scissors!"; 
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            playerScore += 1;
            return "You win, scissors beats paper!";
        } else {
            return "Invalid input! Only rock, paper, or scissors are allowed!";
        }
}
*/
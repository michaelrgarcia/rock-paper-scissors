const choicebtns = document.querySelectorAll(".choicebtns button")
const results = document.querySelector(".results");
let computerScore = 0;
let playerScore = 0;

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

choicebtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        let playerSelection = "";
        const computerSelection = getComputerChoice();
        if (btn.className === "rock") {
            playerSelection = "rock"
        } else if (btn.className === "paper") {
            playerSelection = "paper"
        } else if (btn.className === "scissors") {
            playerSelection = "scissors"
        }
        results.textContent = `You selected ${playerSelection}.`
        return playerSelection;
    });
});


function playRound(playerSelection, computerSelection) { 
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
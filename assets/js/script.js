
const playerDecision = document.getElementById("player-decision");
const computerDecision = document.getElementById("computer-decision");
const options = ["rock", "paper", "scissors"];
const result = document.getElementById("result");
const playerScore= document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");

function startGame(playerOption) {
    const computerOption = options[Math.floor(Math.random() * 3)];
    let outcome = "";
    if (playerOption === computerOption) {
        outcome = "You Tied";
    }
    else {
        switch (playerOption) {
            case "rock":
                outcome = (computerOption === "scissors") ? "You Won" : "You Lose";
                break;
            case "paper":
                outcome = (computerOption === "rock") ? "You Won" : "You Lose";
                break;
            case "scissors":
                outcome = (computerOption === "paper") ? "You Won" : "You Lose";
                break;
        }

    }
    computerDecision.textContent = `Computer: ${computerOption}`;
    playerDecision.textContent = `Player: ${playerOption}`;
    result.textContent = outcome;
    
    switch (outcome) {
        case "You Lose":
            playerScore++;
            playerScore.textContent = playerScore;
            break;
        case "You Lose":
            computerScore++;
            computerScore.textContent = computerScore;
            break;
    }
}





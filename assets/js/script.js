
const playerDecision = document.getElementById("player-decision");
const computerDecision = document.getElementById("computer-decision");
const options = ["rock", "paper", "scissors"];
const result = document.getElementById("result");
const playerScore= document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");

function startGame(playerOption) {
    const computerOption = options[Math.floor(Math.random() * 3)];
    let result = "";
    if (playerOption === computerOption) {
        result = "You Tied";
    }
    else {
        switch (playerOption) {
            case "rock":
                result = (computerOption === "scissors") ? "You Won" : "You Lose";
                break;
            case "paper":
                result = (computerOption === "rock") ? "You Won" : "You Lose";
                break;
            case "scissors":
                result = (computerOption === "paper") ? "You Won" : "You Lose";
                break;
        }

    }
    computerDecision.textContent = `Computer: ${computerOption}`;
    playerDecision.textContent = `Player: ${playerOption}`;
    result.textContent = result;
}




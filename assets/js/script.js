
const playerDecision = document.getElementById("player-decision");
const computerDecision = document.getElementById("computer-decision");
//Array of options 
const options = ["rock", "paper", "scissors"];
const result = document.getElementById("result");
const playerScore= document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
//Declared variables to begin with score value 0
let playerWins=0;
let computerWins=0;
//Chooses randomly amung the 3 options
function startGame(playerOption) {
    const computerOption = options[Math.floor(Math.random() * 3)];
    let outcome = "";
    //Outcome when user and computer decision are the same
    if (playerOption === computerOption) {
        outcome = "You Tied";
    }
    /*
    All possible outcomes when user and computer
    have different decisions
    */
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
    //Displays decisions on screen
    computerDecision.textContent = `Computer: ${computerOption}`;
    playerDecision.textContent = `Player: ${playerOption}`;
    result.textContent = outcome;
    /*
    Incrementally increases scores
    based on different outcomes
    */
    switch (outcome) {
        case "You Won":
            playerWins++;
            playerScore.textContent = playerWins;
            break;
        case "You Lose":
            computerWins++;
            computerScore.textContent = computerWins;
            break;
    }
}





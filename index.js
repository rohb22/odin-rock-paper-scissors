function computerPlay() {

    const pick = ["rock", "paper", "scissors"];
    const index = Math.floor((Math.random() * 3));

    return pick[index];
}

function gameRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        return "Tie!";
    } else if (playerSelection == 'rock') {
        if (computerSelection == "scissors") {
            return ("You Win! Rock beats Scissors");
        } else {
            return ("You Lose! Paper beats Rock");
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == "rock") {
            return ("You Win! Paper beats Rock");
        } else {
            return ("You Lose! Scissors beats Paper");
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == "paper") {
            return ("You Win! Scissors beats Paper");
        } else {
            return ("You Lose! Rock beats Scissors");
        }
    }
}

function game() {

    let gameCount = 1;
    let playerWins = 0;
    let computerWins = 0;

    while (gameCount != 5) {
        
        let choice = ["rock", "paper", "scissors"];

        console.log(`Round ${gameCount}:`)
        let playerSelection;
        do {
            playerSelection = prompt("Choose between rock, paper or scissors").toLowerCase();
        }
        while (choice.indexOf(playerSelection) == -1);
        const computerSelection = computerPlay();

        console.log(`You choose ${playerSelection}`);
        console.log(`Computer choose ${computerSelection}`);
        let result = gameRound(playerSelection, computerSelection);

        if (result.includes("Win")) {
            playerWins++;
        } else if (result.includes("Lose")) {
            computerWins++;
        }

        console.log(result);
        console.log(`Player Wins ${playerWins} | Computer Wins ${computerWins}`);
        gameCount++;
    }

    if (playerWins > computerWins) {
        console.log(`Congratulations You Win!`);
    } else if (computerWins > playerWins) {
        console.log("You Lose!");
    } else {
        console.log("It's a Tie!");
    }
}
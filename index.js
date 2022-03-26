function computerPlay() {

    const pick = ["rock", "paper", "scissors"];
    const index = Math.floor((Math.random() * 3));

    return pick[index];
}

function gameRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        return "Tie!"
    } else if (playerSelection == 'rock') {
        if (computerSelection == "scissors") {
            return ("You Win! Rock beats Scissors")
        } else {
            return ("You Lose! Paper beats Rock")
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == "rock") {
            return ("You Win! Paper beats Rock")
        } else {
            return ("You Lose! Scissors beats Paper")
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == "paper") {
            return ("You Win! Scissors beats Paper")
        } else {
            return ("You Lose! Rock beats Scissors")
        }
    }
}
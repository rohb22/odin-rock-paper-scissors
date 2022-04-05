let playerWins = 0;
let computerWins = 0;

function computerPlay() {

    const pick = ["rock", "paper", "scissors"];
    const index = Math.floor((Math.random() * 3));

    return pick[index];
}

function winner() {
    if(playerWins > computerWins) {
        return 'player';
    } else if(playerWins < computerWins) {
        return 'computer';
    } else {
        return 'tie';
    }
}

function restartGame() {

    const endGame = document.querySelector('.endgame');

    endGame.style.display = "none";
    playerWins = 0;
    computerWins = 0;
    updateScore();

    const playerPick = document.querySelector('.player-pick');
    const computerPick = document.querySelector('.computer-pick');
    
    if(playerPick.hasChildNodes()) {
        playerPick.removeChild(playerPick.firstElementChild);
        computerPick.removeChild(computerPick.firstElementChild);
    }

    const header = document.querySelector('.header-display');

    header.textContent = "Rock Paper Scissors";

    
}

function finishGame() {
    
    const endGame = document.querySelector('.endgame');
    const resultContainer = document.querySelector('.result');

    const result = winner();

    if(result == 'player') {
        resultContainer.textContent = 'You Win!';
    } else if(result == 'computer') {
        resultContainer.textContent = 'You Lose!';
    } else if(result == 'tie') {
        resultContainer.textContent = "It's a tie!";
    }

    endGame.style.display = "block";

    const restart = document.querySelector('.restart');
    restart.addEventListener('click', restartGame);
}

function updateScore() {
    const computerSide = document.querySelector('.computer-score');
    const playerSide = document.querySelector('.player-score');

    computerSide.textContent = computerWins;
    playerSide.textContent = playerWins;

}

function showPick(player, computer) {
    const playerPick = document.querySelector('.player-pick');
    const computerPick = document.querySelector('.computer-pick');


    if(playerPick.hasChildNodes()) {
        playerPick.removeChild(playerPick.firstElementChild);
        computerPick.removeChild(computerPick.firstElementChild);
    }

    const playerPickImage = document.createElement('img');
    const computerPickImage = document.createElement('img');

    playerPickImage.src = `./images/${player}_hand.png`;
    computerPickImage.src = `./images/${computer}_hand.png`;

    playerPick.appendChild(playerPickImage);
    computerPick.appendChild(computerPickImage);

}

function showResults(result) {
    const header = document.querySelector('.header-display');

    if(result == 'Tie') {
        header.textContent = 'Tie!';
    } else {
        header.textContent = `${result} Wins!`;
    }

    if(result == 'Player') {
        playerWins++;
        updateScore();
    } else if(result == 'Computer') {
        computerWins++;
        updateScore();
    }

    if (playerWins >= 5 || computerWins >= 5) {
        finishGame();
    }


}

function gameRound(playerSelection) {

    const computerSelection = computerPlay();
    let result;

    showPick(playerSelection, computerSelection);

    console.log(playerSelection,computerSelection);

    if (playerSelection == computerSelection) {
        result = 'Tie';
    } else if (playerSelection == 'rock') {
        if (computerSelection == "scissors") {
            result = 'Player';
        } else {
            result = 'Computer' ;
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == "rock") {
            result = 'Player';;
        } else {
            result = 'Computer' ;
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == "paper") {
            result = 'Player';;
        } else {
            result = 'Computer' ;
        }
    }

    showResults(result);
}


const choices = (document.querySelectorAll('.choices'));
choices.forEach(choice => choice.addEventListener('click', function() {
    const playerSelection = this.dataset.choice;
    gameRound(playerSelection);
}))



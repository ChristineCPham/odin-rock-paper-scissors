let playerSelection;
let computerSelection;
let playerResult;
let playerPoints = 0;
let computerPoints = 0;

function userPrompt() {
    playerSelection = prompt('Enter rock, paper, or scissors.');

    //Check if user entered a response
    (playerSelection) ? true: alert('This round has been cancelled.')

    // Make playerSelection case-insensitive
    playerSelection = playerSelection.slice(0,1).toUpperCase()
    + playerSelection.slice(1).toLowerCase();

    //Remove when done
    console.log(playerSelection);
}

// Check if the user entered Rock, Paper, or Scissors
function checkUserPrompt() {
    if (playerSelection === 'Rock' || playerSelection === 'Paper' || playerSelection === 'Scissors') {
    } else {
        alert('Sorry. That is not a valid response.');
    }
}
function computerPlay() {
    //Generate random number
    let randomNumber;
    randomNumber = Math.floor(Math.random()*3);
    
    //Assign selection to number
    if (randomNumber === 0) {
        computerSelection = 'Rock';
    } else if (randomNumber === 1) {
        computerSelection = 'Paper';
    } else if (randomNumber === 2) {
        computerSelection = 'Scissors'
    } else {
        console.log('Error at function computerPlay()');
    }

    //Remove when done
    console.log(computerSelection);
}

function playRound() {
    userPrompt();
    checkUserPrompt();
    computerPlay();

    //Determine winner of a round
    if (playerSelection === 'Rock' && computerSelection === 'Rock') {
        playerResult = 'tie';
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        playerResult = 'lose';
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        playerResult = 'win';
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        playerResult = 'win';
    } else if (playerSelection === 'Paper' && computerSelection === 'Paper') {
        playerResult = 'tie';
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        playerResult = 'lose';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        playerResult = 'lose';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        playerResult = 'win';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Scissors') {
        playerResult = 'tie';
    } else {
        alert('Error at function playRound().')
    }

    //Delete when done
    console.log(playerResult);
} 

playRound();
roundWinner();

//Shows the winner of the game
function roundWinner() {
    //Logs the winner of the round and the selections
    switch (playerResult) {
        case 'win':
            console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
            playerPoints++;
            break;
        case 'tie':
            console.log(`We tied. We both chose ${playerSelection}.`);
            break;
        case 'lose':
            console.log(`You lose. ${computerSelection} beats ${playerSelection}.`);
            computerPoints++;
    }

    //Shows player and computer's points
    console.log(`You: ${playerPoints}`);
    console.log(`Computer: ${computerPoints}`);
}
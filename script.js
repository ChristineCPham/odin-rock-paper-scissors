//Global variables
let playerSelection;
let computerSelection;
let playerResult;
let gameRound = 0;
let playerPoints = 0;
let computerPoints = 0;

//Generates random computer selection
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
}

//Plays a single round of the game
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
} 

//Shows the winner of the game
function roundWinner() {
    //Shows users what round the game is at
    gameRound++;
    console.log(`Round: ${gameRound}`);

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
            break;
    }
}

//Plays the entire game
function game() {
    //Plays the game round 5 times
    for (let i = 0; i < 5; i++) {
        playRound();
        roundWinner();
    }

    //Logs the winner of the game
    if (playerPoints > computerPoints) {
        console.log('You win this game!');
    } else if (playerPoints < computerPoints) {
        console.log('You lose this game! Try again next time.');
    } else if (playerPoints === computerPoints) {
        console.log('We tied this game!');
    } else {
        console.log('Error at game().');
    }
}

game();
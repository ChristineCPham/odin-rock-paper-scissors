//Global variables
let playerSelection;
let computerSelection;
let playerResult;
let gameRound = 0;
let playerPoints = 0;
let computerPoints = 0;

//function userInput() {
    const rock = document.querySelector('#rock');
    rock.addEventListener('click', () => {
        playerSelection = 'Rock';
        alert(playerSelection);
    })

    const paper = document.querySelector('#paper');
    paper.addEventListener('click', () => {
        playerSelection = 'Paper';
        alert(playerSelection);
    })

    const scissors = document.querySelector('#scissors');
    scissors.addEventListener('click', () => {
        playerSelection = 'Scissors';
        alert(playerSelection);
    })
//}

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
function roundResult() {
    //Shows users what round the game is at
    gameRound++;
    const roundNum = document.querySelector('#roundNum');
    roundNum.textContent = `Round Number: ${gameRound}`;

    //Query Selector for HMTL Elements
    const winner = document.querySelector('#winner');
    const displayPlayer = document.querySelector('#displayPlayer');
    const displayComputer = document.querySelector('#displayComputer');
    const displayPlayerPts = document.querySelector('#displayPlayerPts');
    const displayComputerPts = document.querySelector('#displayComputerPts');

    //Displays the selections of the player & computer
    displayPlayer.textContent = `Selection: ${playerSelection}`;
    displayComputer.textContent = `Selection: ${computerSelection}`;

    //Displays the winner of the round
    switch (playerResult) {
        case 'win':
            winner.textContent = 'Round Winner: Player';
            playerPoints++;
            break;
        case 'tie':
            winner.textContent = 'Round Winner: None';
            break;
        case 'lose':
            winner.textContent = 'Round Winner: Computer';
            computerPoints++;
            break;
    }

    //Shows player & computer points
    displayComputerPts.textContent = playerPoints;
    displayComputerPts.textContent = computerPoints;
}

//userInput();
console.log(playerSelection);
let playerSelection;
let computerSelection;

function userPrompt() {
    playerSelection = prompt('Enter rock, paper, or scissors.');

    // Make playerSelection case-insensitive
    playerSelection = playerSelection.slice(0,1).toUpperCase()
    + playerSelection.slice(1).toLowerCase();

    //Remove when done
    console.log(playerSelection);
}

// Check if the user entered Rock, Paper, or Scissors
function checkUserPrompt() {
    if (playerSelection === 'Rock' || playerSelection === 'Paper' || playerSelection === 'Paper') {
    } else {
        alert('Sorry. That is not a valid response.');
    }
}
computerPlay();
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
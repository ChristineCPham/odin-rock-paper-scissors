# The Odin Project - Rock, Paper, Scssiors

This is a solution to The Odin Project's [Rock, Paper, Scissors](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/rock-paper-scissors) project. It also include an extension of their project [Revisiting Rock, Paper, Scissors](https://www.theodinproject.com/lessons/foundations-revisiting-rock-paper-scissors). [The Odin Project](https://www.theodinproject.com/) is a free and open source full-stack cirriculum.

## Table of Contents

- [Overview](#overview)
    - [The Challenge](#the-challenge)
    - [Links](#links)
- [My Process](#my-process)
    - [Build With](#built-with)
    - [What I Learned](#what-i-learned)
    - [Continued Development](#continued-development)
- [Author](#author)

## Overview

### The Challenge

Users should be able to:
- Click their choice of rock, paper, or scissors
- Play against a computer
- See their game results in the user interface

### Links

- Solution URL: [GitHub](https://github.com/ChristineCPham/odin-rock-paper-scissors)
- Live Site URL: [GitHub Pages](https://christinecpham.github.io/odin-rock-paper-scissors/)

## My Process

### Built With

- Semantic HTML5 Markup
- CSS3
- JavaScript

### What I Learned

I learned how to apply problem solving skills to create a JavaScript game. First, I made a list of all of the features included in the project. Then, I created a mindmap of the code. Afterwards, I wrote each step in pseudocode.

This project let me incorporate what I previously learned into a game. For example, I used a ternary operator to make sure the user enters an input.

```js

//Check if user entered a response

(playerSelection) ? true: alert('This game has been cancelled.');

```

I also used a switch statement to log the winner of the round and which selections the player & computer choose.

```js

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

```

In the extended version of the project, I created a user interface and removed the console log code. Here, I practiced using DOM manipulation and event listeners in JavaScript.

```js

// Plays game when button is clicked
function userInput() {
    const rock = document.querySelector('#rock');
    rock.addEventListener('click', () => {
        playerSelection = 'Rock';
        playRound();
    })

    const paper = document.querySelector('#paper');
    paper.addEventListener('click', () => {
        playerSelection = 'Paper';
        playRound();
    })

    const scissors = document.querySelector('#scissors');
    scissors.addEventListener('click', () => {
        playerSelection = 'Scissors';
        playRound();
    })
}

```

### Continued Development

I will continue learning JavaScript, particularly on writing clean code. Writing clean code is very important to me. 

A major part of front-end development is learning how to code websites with a great user experience. These are websites that are easy to navigate and interact with. Similarly, developers should be able to write code that is easy to understand and navigate.

## Author

GitHub: [ChristineCPham](https://github.com/ChristineCPham)
- LinkedIn: [ChristineP](https://www.linkedin.com/in/christine-p-b456751a6/)
- Frontend Mentor: [ChristineCPham](https://www.frontendmentor.io/profile/ChristineCPham)
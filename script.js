"use strict";

const rockBtn = document.querySelector("#rock-button");
const paperBtn = document.querySelector("#paper-button");
const scissorBtn = document.querySelector("#scissor-button");
const outputResultContainer = document.querySelector("#result-output");
const outputRoundContainer = document.querySelector("#round-output");
let outputResultText = document.createElement('p');
let outputRoundText;

let round = 0;
let winCondition; 
let playerPoints = 0; 
let computerPoints = 0; 

rockBtn.addEventListener('click', () => {
  rpsGame(0);
});

paperBtn.addEventListener('click', () => {
  rpsGame(1);
});

scissorBtn.addEventListener('click', () => {
  rpsGame(2);
});


// 0 = rock, 1 = paper, 2 = scissors
const rpsNumbs = [`rock`, `paper`, `scissors`];

// 0 = tie, 1 = win, 2 = lose.
const rpsArray = [
  [0, 2, 1],
  [1, 0, 2],
  [2, 1, 0],
];

// Random number that returns a number between 0 to 2.
const getComputerResult = function () {
  return Math.floor(Math.random() * 3);
};

// return 0 if its a tie, 1 if the player won the round, 2 if the computer won the round.
const playRound = function (getPlayerResult, getComputerResult) {
  if (rpsArray[getPlayerResult][getComputerResult] === 0) {
    outputRoundText = document.createElement('p');
    outputRoundText.setAttribute('style', 'color: yellow;');
    outputRoundText.textContent = `It's a tie! ${rpsNumbs[getPlayerResult]} doesn't beat ${rpsNumbs[getComputerResult]}!`;
    outputRoundContainer.appendChild(outputRoundText);
    return rpsArray[getPlayerResult][getComputerResult];
  } else if (rpsArray[getPlayerResult][getComputerResult] === 1) {
    outputRoundText = document.createElement('p');
    outputRoundText.setAttribute('style', 'color: green;');
    outputRoundText.textContent = `You won this round! ${rpsNumbs[getPlayerResult]} beats ${rpsNumbs[getComputerResult]}!`;
    outputRoundContainer.appendChild(outputRoundText);
    return rpsArray[getPlayerResult][getComputerResult];
  } else {
    outputRoundText = document.createElement('p');
    outputRoundText.setAttribute('style', 'color: red;');
    outputRoundText.textContent = `You lost this round! ${rpsNumbs[getComputerResult]} beats ${rpsNumbs[getPlayerResult]}!`;
    outputRoundContainer.appendChild(outputRoundText);
    return rpsArray[getPlayerResult][getComputerResult];
  }
};

// Play a game of five rounds keeping score of the player and computer. If it ties, then you restart the round.
const rpsGame = function (buttonVal) {
  if (round != 5) {
    winCondition = playRound(buttonVal, getComputerResult());
    if (winCondition === 1) {
      playerPoints++;
    } else if (winCondition === 2) {
      computerPoints++;
    } else {
      round--;
    }
    round++;
    if (round == 5) {
      if (playerPoints > computerPoints) {
        outputResultText.setAttribute('style', 'color: green;');
        outputResultText.textContent = `You won this game! Your score is ${playerPoints}:${computerPoints}`;
        outputResultContainer.appendChild(outputResultText);
      } else if (playerPoints === computerPoints) {
        outputResultText.setAttribute('style', 'color: yellow;');
        outputResultText.textContent = `You tied this game! Your score is ${playerPoints}:${computerPoints}`;
        outputResultContainer.appendChild(outputResultText);
      } else {
        outputResultText.setAttribute('style', 'color: red;');
        outputResultText.textContent = `You lost this game! Your score is ${playerPoints}:${computerPoints}`;
        outputResultContainer.appendChild(outputResultText);
      }
    }
  }
};


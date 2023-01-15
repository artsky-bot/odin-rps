"use strict";

const rockBtn = document.querySelector("#rock-button");
const paperBtn = document.querySelector("#paper-button");
const scissorBtn = document.querySelector("#scissor-button");






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
    console.log(
      `It's a tie! ${rpsNumbs[getPlayerResult]} doesn't beat ${rpsNumbs[getComputerResult]}!`
    );
    return rpsArray[getPlayerResult][getComputerResult];
  } else if (rpsArray[getPlayerResult][getComputerResult] === 1) {
    console.log(
      `You won this round! ${rpsNumbs[getPlayerResult]} beats ${rpsNumbs[getComputerResult]}!`
    );
    return rpsArray[getPlayerResult][getComputerResult];
  } else {
    console.log(
      `You lost this round! ${rpsNumbs[getComputerResult]} beats ${rpsNumbs[getPlayerResult]}!`
    );
    return rpsArray[getPlayerResult][getComputerResult];
  }
};

// Play a game of five rounds keeping score of the player and computer. If it ties, then you restart the round.
/*const rpsGame = function () {
  let playerPoints = 0;
  let computerPoints = 0;
  let winCondition;

  for (let i = 0; i < 5; i++) {
    winCondition = playRound(getPlayerResult(), getComputerResult());

    if (winCondition === 1) {
      playerPoints++;
    } else if (winCondition === 2) {
      computerPoints++;
    } else {
      i--;
    }
  }

  if (playerPoints > computerPoints) {
    console.log(
      `You won this game! Your score is ${playerPoints}:${computerPoints}`
    );
  } else if (playerPoints === computerPoints) {
    console.log(
      `You tied this game! Your score is ${playerPoints}:${computerPoints}`
    );
  } else {
    console.log(
      `You lost this game! Your score is ${playerPoints}:${computerPoints}`
    );
  }
};

rpsGame();*/


rockBtn.onclick = () => playRound(0, getComputerResult());
paperBtn.onclick = () => playRound(1, getComputerResult());
scissorBtn.onclick = () => playRound(2, getComputerResult());


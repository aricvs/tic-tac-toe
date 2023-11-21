"use strict";

// generate the board
function generateGameboard() {
  const gameboardArray = [];

  for (let row = 0; row < 3; row++) {
    gameboardArray.push([]);
    for (let col = 0; col < 3; col++) {
      gameboardArray[row].push("-");
    }
  }

  return gameboardArray;
}

// creates the board variable
const gameboard = generateGameboard();

// get the player names from prompt, return object with names
function getPlayers() {
  const player1 = prompt("Player 1 (o) name:");
  const player2 = prompt("Player 2 (x) name");

  return { player1: player1, player2: player2 };
}

console.log(getPlayers());

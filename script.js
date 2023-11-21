"use strict";

// uncomment this once the core code is complete
// const game = (() => {
function createPlayer(name, mark, turn) {
  return { name, mark, turn };
}

const turn = 1;
const player1 = createPlayer("p1", "X");
const player2 = createPlayer("p2", "O");

function generateBoard() {
  let boardArray = [];
  for (let i = 0; i < 3; i++) {
    boardArray.push([]);
    for (let j = 0; j < 3; j++) {
      boardArray[i].push("-");
    }
  }
  return boardArray;
}

const gameboard = generateBoard();

function displayBoard() {
  for (let i = 0; i < 3; i++) {
    console.log(`${gameboard[i][0]} ${gameboard[i][1]} ${gameboard[i][2]}`);
  }
}

function getPick() {
  const rowPick = prompt("Choose a row number (index 0)");
  const colPick = prompt("Choose a column number (index 0)");
  return { rowPick, colPick };
}

function fillGameboard() {
  const roundPicks = getPick();
  if (turn === 1) {
    gameboard[roundPicks.rowPick][roundPicks.colPick] = "X";
  }
}

// })();

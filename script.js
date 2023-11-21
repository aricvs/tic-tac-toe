"use strict";

// uncomment this once the core code is complete
// const game = (() => {
function createPlayer(name, mark, turn) {
  return { name, mark, turn };
}

const player1 = createPlayer("p1", "X", true);
const player2 = createPlayer("p2", "O", false);

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
// })();

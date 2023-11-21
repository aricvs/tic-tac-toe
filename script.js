"use strict";

// uncomment this once the core code is complete
// const game = (() => {
const gameboard = {
  board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
};

function displayGameboard() {
  console.log(
    ` ${gameboard.board[0]} | ${gameboard.board[1]} | ${gameboard.board[2]}\n---|---|---
 ${gameboard.board[3]} | ${gameboard.board[4]} | ${gameboard.board[5]}\n---|---|---
 ${gameboard.board[6]} | ${gameboard.board[7]} | ${gameboard.board[8]}`
  );
}

displayGameboard();

// uncomment this once the core code is complete
// })();

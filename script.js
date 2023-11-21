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

let turn = 1;

function playerPick() {
  let mark;
  let pick;

  if (turn === 1) {
    mark = "X";
  } else {
    mark = "O";
  }

  while (true) {
    pick = prompt("Choose a square (1-9)");
    if (/^\d$/.test(pick) && /^\d$/.test(gameboard.board[pick - 1])) {
      break;
    }
  }

  gameboard.board[pick - 1] = mark;

  turn === 1 ? (turn = 2) : (turn = 1);

  displayGameboard();
}

// uncomment this once the core code is complete
// })();

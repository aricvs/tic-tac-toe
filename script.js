"use strict";

// uncomment this once the core code is complete
// const game = (() => {
const gameboard = {
  board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
};

function displayGameboard() {
  console.log(
    `\n ${gameboard.board[0]} | ${gameboard.board[1]} | ${gameboard.board[2]}\n---|---|---
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

  // keep prompting until player picks an empty square and uses a valid number
  while (true) {
    pick = prompt("Choose a square (1-9)");
    if (/^\d$/.test(pick) && /^\d$/.test(gameboard.board[pick - 1])) {
      break;
    }
  }

  gameboard.board[pick - 1] = mark;
}

function switchTurn() {
  turn === 1 ? (turn = 2) : (turn = 1);
}

function playRound() {
  playerPick();
  switchTurn();
  displayGameboard();
}

// TODO: add checkTie function
function playGame() {
  let winner;
  let gameOver = false;

  while (!gameOver) {
    playRound();
    if (checkWin() === 1) {
      winner = "X";
      gameOver = true;
    }
    if (checkWin() === 2) {
      winner = "O";
      gameOver = true;
    }
  }

  console.log(`${winner} wins!`);
}

// check win conditions and return the winning player
function checkWin() {
  let board = gameboard.board;
  if (
    (board[0] === "X" && board[1] === "X" && board[2] === "X") ||
    (board[3] === "X" && board[4] === "X" && board[5] === "X") ||
    (board[6] === "X" && board[7] === "X" && board[8] === "X") ||
    (board[0] === "X" && board[3] === "X" && board[6] === "X") ||
    (board[1] === "X" && board[4] === "X" && board[7] === "X") ||
    (board[2] === "X" && board[5] === "X" && board[8] === "X") ||
    (board[0] === "X" && board[4] === "X" && board[8] === "X") ||
    (board[2] === "X" && board[4] === "X" && board[6] === "X")
  ) {
    return 1;
  }
  if (
    (board[0] === "O" && board[1] === "O" && board[2] === "O") ||
    (board[3] === "O" && board[4] === "O" && board[5] === "O") ||
    (board[6] === "O" && board[7] === "O" && board[8] === "O") ||
    (board[0] === "O" && board[3] === "O" && board[6] === "O") ||
    (board[1] === "O" && board[4] === "O" && board[7] === "O") ||
    (board[2] === "O" && board[5] === "O" && board[8] === "O") ||
    (board[0] === "O" && board[4] === "O" && board[8] === "O") ||
    (board[2] === "O" && board[4] === "O" && board[6] === "O")
  ) {
    return 2;
  }
}

playGame();
// uncomment this once the core code is complete
// })();

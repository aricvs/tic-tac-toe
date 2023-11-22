"use strict";

// global gameboard variable
const gameboard = {
  board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
};

// global turn variable
let turn = 1;

// renders the gameboard in the console with additional styling
function displayGameboard() {
  console.log(
    `\n ${gameboard.board[0]} | ${gameboard.board[1]} | ${gameboard.board[2]}\n---|---|---
 ${gameboard.board[3]} | ${gameboard.board[4]} | ${gameboard.board[5]}\n---|---|---
 ${gameboard.board[6]} | ${gameboard.board[7]} | ${gameboard.board[8]}`
  );
}

// function to prompt player for a pick
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

// switches player turn
function switchTurn() {
  turn === 1 ? (turn = 2) : (turn = 1);
}

// plays a single round of the game
function playRound() {
  playerPick();
  switchTurn();
  displayGameboard();
}

// runs a loop to play rounds, check for win conditions and tie conditions
// TODO: fix infinite loop
function playGame() {
  while (true) {
    playRound();
    if (checkWin() === 1) {
      console.log("X wins!");
      break;
    }
    if (checkWin() === 2) {
      console.log("O wins!");
      break;
    }
    if (checkTie()) {
      console.log("It's a tie!");
      break;
    }
  }
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

// check if there are numbered squares remaining, return true or false
function checkTie() {
  let hasTie = true;
  gameboard.board.forEach((spot) => {
    if (typeof spot === "number") {
      hasTie = false;
    }
  });
  return hasTie;
}

displayGameboard();
playGame();

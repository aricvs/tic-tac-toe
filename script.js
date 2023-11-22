"use strict";

const Gameboard = (function () {
  const board = ["", "", "", "", "", "", "", "", ""];
  const cells = document.querySelectorAll(".container__cells");
  function displayBoard() {
    cells.forEach(
      (cell) => (cell.textContent = this.board[cell.getAttribute("cellIdx")])
    );
  }
  return { board, displayBoard };
})();

function Player(mark) {
  return { mark };
}

// TODO: put below in an IIFE called "game"
let gameboard = Gameboard;
let player1 = Player("X");
let player2 = Player("O");
let currentPlayer = 1;
let gameOver = false;

const makePick = function () {
  const cells = document.querySelectorAll(".container__cells");

  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      if (gameboard.board[cell.getAttribute("cellIdx")] === "") {
        if (currentPlayer === 1) {
          gameboard.board[cell.getAttribute("cellIdx")] = player1.mark;
          switchPlayer();
        } else {
          gameboard.board[cell.getAttribute("cellIdx")] = player2.mark;
          switchPlayer();
        }
        gameboard.displayBoard();
      }
    });
  });
};

const switchPlayer = function () {
  currentPlayer === 1 ? (currentPlayer = 2) : (currentPlayer = 1);
};

const checkWin = function () {
  const bd = gameboard.board;

  if (
    (bd[0] === "X" && bd[1] === "X" && bd[2] === "X") ||
    (bd[3] === "X" && bd[4] === "X" && bd[5] === "X") ||
    (bd[6] === "X" && bd[7] === "X" && bd[8] === "X") ||
    (bd[0] === "X" && bd[3] === "X" && bd[6] === "X") ||
    (bd[1] === "X" && bd[4] === "X" && bd[7] === "X") ||
    (bd[2] === "X" && bd[5] === "X" && bd[2] === "X") ||
    (bd[0] === "X" && bd[4] === "X" && bd[8] === "X") ||
    (bd[2] === "X" && bd[4] === "X" && bd[6] === "X")
  ) {
    return 1;
  } else if (
    (bd[0] === "O" && bd[1] === "O" && bd[2] === "O") ||
    (bd[3] === "O" && bd[4] === "O" && bd[5] === "O") ||
    (bd[6] === "O" && bd[7] === "O" && bd[8] === "O") ||
    (bd[0] === "O" && bd[3] === "O" && bd[6] === "O") ||
    (bd[1] === "O" && bd[4] === "O" && bd[7] === "O") ||
    (bd[2] === "O" && bd[5] === "O" && bd[2] === "O") ||
    (bd[0] === "O" && bd[4] === "O" && bd[8] === "O") ||
    (bd[2] === "O" && bd[4] === "O" && bd[6] === "O")
  ) {
    return 2;
  }
};

makePick();

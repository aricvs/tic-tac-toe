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

let gameboard = Gameboard;
let player1 = Player("X");
let player2 = Player("O");
let currentPlayer = 1;
let gameOver = false;

const makePick = function () {
  const cells = document.querySelectorAll(".container__cells");

  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      if (currentPlayer === 1) {
        gameboard.board[cell.getAttribute("cellIdx")] = player1.mark;
        switchPlayer();
      } else {
        gameboard.board[cell.getAttribute("cellIdx")] = player2.mark;
        switchPlayer();
      }
      gameboard.displayBoard();
    });
  });
};

const switchPlayer = function () {
  currentPlayer === 1 ? (currentPlayer = 2) : (currentPlayer = 1);
};

makePick();

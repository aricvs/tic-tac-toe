"use strict";

const Gameboard = (function () {
  const board = ["", "", "", "", "", "", "", "", ""];
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

const Game = (function () {
  const gameMsg = document.querySelector(".container__messages");
  const cells = document.querySelectorAll(".container__cells");
  const restartBtn = document.querySelector(".container__restart-btn");
  const gameboard = Gameboard;
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const player1 = Player("X");
  const player2 = Player("O");
  let currentPlayer = 1;
  let running = false;

  const startGame = function () {
    cells.forEach((cell) => cell.addEventListener("click", clickCell));
  };

  const clickCell = function () {};

  const fillCell = function (cell, index) {};

  const switchPlayer = function () {};

  const checkWin = function () {};

  const restartGame = function () {};
})();

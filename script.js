"use strict";

const game = {
  turn: 1,
  player1: Players("X"),
  player2: Players("O"),

  makePick: function () {
    let currentPlayer;
    if (this.turn === 1) {
      currentPlayer = this.player1;
      this.switchTurn();
    } else {
      currentPlayer = this.player2;
      this.switchTurn();
    }
  },

  switchTurn: function () {
    this.turn === 1 ? (this.turn = 2) : (this.turn = 1);
  },
};

const Gameboard = (function () {
  const board = ["", "", "", "", "", "", "", "", ""];
  const cells = document.querySelectorAll(".container__square");
  function displayBoard() {
    cells.forEach(
      (cell) => (cell.textContent = this.board[cell.getAttribute("cellIdx")])
    );
  }
  return { board, displayBoard };
})();

function Players(mark) {
  return { mark };
}

Gameboard.displayBoard();

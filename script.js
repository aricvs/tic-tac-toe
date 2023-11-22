"use strict";
const game = {
  turn: 1,
};

const Gameboard = (function () {
  const board = ["", "", "", "", "", "", "", "", ""];
  function displayBoard() {
    const cells = document.querySelectorAll(".container__square");
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

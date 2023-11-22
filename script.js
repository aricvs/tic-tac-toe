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

function CreatePlayer(mark) {
  return { mark };
}

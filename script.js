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
  let currentPlayer = player1.mark;
  let running = true;

  const clickCell = function () {
    const cellIdx = this.getAttribute("cellIdx");
    if (gameboard.board[cellIdx] != "" || !running) {
      return;
    }

    fillCell(this, cellIdx);
    checkWin();
  };

  const fillCell = function (cell, index) {
    gameboard.board[index] = currentPlayer;
    cell.textContent = currentPlayer;
  };

  const switchPlayer = function () {
    currentPlayer = currentPlayer === "X" ? player2.mark : player1.mark;
    gameMsg.textContent = `${currentPlayer}'s turn`;
  };

  const checkWin = function () {
    let gameOver = false;
    for (let i = 0; i < winConditions.length; i++) {
      const condition = winConditions[i];
      const cell1 = gameboard.board[condition[0]];
      const cell2 = gameboard.board[condition[1]];
      const cell3 = gameboard.board[condition[2]];

      if (cell1 === "" || cell2 === "" || cell3 === "") {
        continue;
      }
      if (cell1 === cell2 && cell2 === cell3) {
        gameOver = true;
        break;
      }
    }
    if (gameOver) {
      gameMsg.textContent = `${currentPlayer} wins!`;
      running = false;
    } else if (!gameboard.board.includes("")) {
      gameMsg.textContent = `Draw!`;
      running = false;
    } else {
      switchPlayer();
    }
  };

  const restartGame = function () {};

  const startGame = (function () {
    cells.forEach((cell) => cell.addEventListener("click", clickCell));
    restartBtn.addEventListener("click", () => restartGame);
    gameMsg.style.visibility = "visible";
    gameMsg.textContent = `It's ${currentPlayer}'s turn`;
  })();
})();

"use strict";

// IIFE to build the gameboard and its display function
const Gameboard = (function () {
  let board = ["", "", "", "", "", "", "", "", ""];
  function displayBoard() {
    cells.forEach(
      (cell) => (cell.textContent = this.board[cell.getAttribute("cellIdx")])
    );
  }
  return { board, displayBoard };
})();

// factory to build the Players
function Player(mark) {
  return { mark };
}

// main game IIFE
const Game = (function () {
  // declaration of variables to be used by game functions
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

  // fill cell and check win if a valid space is clicked
  const clickCell = function () {
    const cellIdx = this.getAttribute("cellIdx");
    if (gameboard.board[cellIdx] != "" || !running) {
      return;
    }

    fillCell(this, cellIdx);
    checkWin();
  };

  // update board array and cell content with current player's mark
  const fillCell = function (cell, index) {
    gameboard.board[index] = currentPlayer;
    cell.textContent = currentPlayer;
  };

  // switch players, self explanatory
  const switchPlayer = function () {
    currentPlayer = currentPlayer === "X" ? player2.mark : player1.mark;
    gameMsg.textContent = `${currentPlayer}'s turn`;
  };

  // check all win conditions via loop, end game or switch players
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
      removeEffects();
    } else if (!gameboard.board.includes("")) {
      gameMsg.textContent = `Draw!`;
      running = false;
      removeEffects();
    } else {
      switchPlayer();
    }
  };

  // restarts game, self explanatory
  const restartGame = function () {
    currentPlayer = player1.mark;
    gameboard.board = ["", "", "", "", "", "", "", "", ""];
    gameMsg.textContent = `It's ${currentPlayer}'s turn`;
    cells.forEach((cell) => {
      cell.textContent = "";
    });
    running = true;
    addEffects();
  };

  // remove interaction effects (CSS pseudo classes) from cells
  const removeEffects = function () {
    cells.forEach((cell) => {
      cell.style.cursor = "auto";
      cell.classList.remove("cell--hover");
      cell.classList.remove("cell--active");
    });
  };

  // add back interaction effects (CSS pseudo classes) on cells
  const addEffects = function () {
    cells.forEach((cell) => {
      cell.style.cursor = "pointer";
      cell.classList.add("cell--hover");
      cell.classList.add("cell--active");
    });
  };

  // initializes the game and sets the event listeners to run via IIFE
  const startGame = (function () {
    cells.forEach((cell) => cell.addEventListener("click", clickCell));
    restartBtn.addEventListener("click", restartGame);
    gameMsg.style.visibility = "visible";
    gameMsg.textContent = `It's ${currentPlayer}'s turn`;
  })();
})();

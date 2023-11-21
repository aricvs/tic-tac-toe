function createGameboard(gameboard) {
  return {
    gameboard: [
      ["-", "-", "-"],
      ["-", "-", "-"],
      ["-", "-", "-"],
    ],
  };
}

function createPlayer(name, mark) {
  return {
    name: name,
    mark: mark,
  };
}

const gameboard = createGameboard();
const player1 = createPlayer("John", "o");
const player2 = createPlayer("Mary", "x");

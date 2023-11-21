"use strict";

function generateGameboard() {
  const gameboardArray = [];

  for (let row = 0; row < 3; row++) {
    gameboardArray.push([]);
    for (let col = 0; col < 3; col++) {
      gameboardArray[row].push("-");
    }
  }

  return gameboardArray;
}

console.log(generateGameboard());

"use strict";
const game = {
  turn: 1,
};

const Gameboard = (function () {
  const board = ["", "", "", "", "", "", "", "", ""];
  return board;
})();

function Players(mark) {
  return { mark };
}

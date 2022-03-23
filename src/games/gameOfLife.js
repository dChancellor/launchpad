import { newPlay, checkNeighbors } from '../helpers.js';
import { start } from '../plays.js';
import { allNeighbors } from '../definitions.js';

let history = [new Set(), new Set()];

const seed = (board, cells, color) => {
  let litButtons = new Set();
  cells.forEach((cell) => {
    if (Math.random() < 0.4) {
      litButtons.add(cell);
      board.setButtonColor(cell, color);
    }
  });
  return litButtons;
};

const saveHistory = (litButtons) => {
  history[0] = history[1];
  history[1] = new Set(litButtons);
};

const checkHistory = (litButtons) => {
  if (areSetsEqual(litButtons, history[0]) || areSetsEqual(litButtons, history[1])) return true;
  saveHistory(litButtons);
  return false;
};

const areSetsEqual = (set1, set2) => {
  let test = true;
  set1.forEach((element) => {
    if (!set2.has(element)) test = false;
  });
  return test;
};

const gameOfLife = (board) => {
  const { color, cells } = newPlay(board, 'Game of Life', true);
  let litButtons = seed(board, cells, color);
  const play = () => {
    const isStuckInLoop = checkHistory(litButtons);
    if (isStuckInLoop) {
      litButtons = seed(board, cells, color);
    }
    const temp = new Set(litButtons);
    cells.forEach((cell) => {
      let { lit: litNeighbors } = checkNeighbors(cell, allNeighbors, litButtons);
      if (litNeighbors.length < 2 && litButtons.has(cell)) {
        board.setButtonColor(cell, [0, 0, 0]);
        temp.delete(cell);
      }
      if (litNeighbors.length > 3 && litButtons.has(cell)) {
        board.setButtonColor(cell, [0, 0, 0]);
        temp.delete(cell);
      }
      if (litNeighbors.length === 3 && !litButtons.has(cell)) {
        board.setButtonColor(cell, color);
        temp.add(cell);
      }
    });
    litButtons = new Set(temp);
  };
  start(play, 1000);
};

export default gameOfLife;

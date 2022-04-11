import { resetBoard, checkNeighbors, delay, animatedWipe } from '../helpers.js';
import { start, stop } from '../plays.js';
import { allNeighbors, gameOfLifeSeeds } from '../definitions.js';

let history = [new Set(), new Set()];

const seed = (board, cells, color) => {
  let litButtons = new Set();
  // cells.forEach((cell) => {
  //   if (Math.random() < 0.4) {
  //     litButtons.add(cell);
  //     board.setButtonColor(cell, color);
  //   }
  // });
  gameOfLifeSeeds.spaceshipExplodes.forEach((cell) => {
    litButtons.add(cell);
    board.setButtonColor(cell, color);
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

const breakOutOfLoop = async (board) => {
  stop(board, false);
  await delay(2000);
  animatedWipe(board, () => gameOfLife(board));
};

const step = (board, cells, litButtons, color) => {
  const aliveCells = new Set(litButtons);
  cells.forEach((cell) => {
    let { lit: aliveNeighbors } = checkNeighbors(cell, allNeighbors, litButtons);
    if (aliveNeighbors.length < 2 && litButtons.has(cell)) {
      board.setButtonColor(cell, [0, 0, 0]);
      aliveCells.delete(cell);
    }
    if (aliveNeighbors.length > 3 && litButtons.has(cell)) {
      board.setButtonColor(cell, [0, 0, 0]);
      aliveCells.delete(cell);
    }
    if (aliveNeighbors.length === 3 && !litButtons.has(cell)) {
      board.setButtonColor(cell, color);
      aliveCells.add(cell);
    }
  });
  return aliveCells;
};

const test = (board) => {
  console.log('here');
  board.on('buttonDown', (button) => {
    console.log('we are here pushing this button: ', button);
  });
};
const gameOfLife = async (board, isSubModeActive) => {
  if (isSubModeActive) return test(board);
  const { color, cells } = await resetBoard(board, 'Game of Life', true);
  let litButtons = seed(board, cells, color);
  const play = async () => {
    const isStuckInLoop = checkHistory(litButtons);
    if (isStuckInLoop) breakOutOfLoop(board);
    const aliveCells = step(board, cells, litButtons, color);
    litButtons = new Set(aliveCells);
  };
  start(play, 1000);
};

export default gameOfLife;

import gameOfLife from './games/gameOfLife.js';
import fireworks from './games/firework.js';
import randomPaint from './games/randomPaint.js';
import cornerSweeps from './games/cornerSweeps.js';

let gameLoop;
let isGameRunning = false;

export const play = {
  fireworks: (board) => fireworks(board),
  cornerSweeps: (board) => cornerSweeps(board),
  gameOfLife: (board) => gameOfLife(board),
  randomPaint: (board) => randomPaint(board),
};

export const start = (tickFunction, interval) => {
  isGameRunning = true;
  gameLoop = setInterval(tickFunction, interval);
};

export const stop = (board, shouldClearBoard) => {
  console.log('Stopping...');
  // litButtons.clear();
  if (isGameRunning) clearInterval(gameLoop);
  if (shouldClearBoard) board.allOff();
  isGameRunning = false;
};

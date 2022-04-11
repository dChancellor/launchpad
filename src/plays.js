import gameOfLife from './games/gameOfLife.js';
import fireworks from './games/firework.js';
import randomPaint from './games/randomPaint.js';
import cornerSweeps from './games/cornerSweeps.js';
import shapes from './games/shapes.js';

let gameLoop;
let isGameRunning = false;

export const play = {
  fireworks: (board, isSubModeActive) => fireworks(board, isSubModeActive),
  cornerSweeps: (board, isSubModeActive) => cornerSweeps(board, isSubModeActive),
  gameOfLife: (board, isSubModeActive) => gameOfLife(board, isSubModeActive),
  randomPaint: (board, isSubModeActive) => randomPaint(board, isSubModeActive),
  shapes: (board, isSubModeActive) => shapes(board, isSubModeActive),
};

export const start = (tickFunction, interval) => {
  isGameRunning = true;
  gameLoop = setInterval(tickFunction, interval);
};

export const stop = (board, shouldClearBoard) => {
  console.log('Stopping...');
  if (isGameRunning) clearInterval(gameLoop);
  if (shouldClearBoard) board.allOff();
  isGameRunning = false;
};

import { chooseRandomCorner, generateRandomColor } from './helpers.js';

let isPlayRunning = false;

const cornerSweep = (board) => {
  isPlayRunning = true;
  console.log('corner sweep');
  const origin = chooseRandomCorner();
  const color = generateRandomColor();

  const doTheThing = (number) => {
    board.setButtonColor(origin, color);
    // Add 1 to the number and light
    // Subtract 1 from the number and light
    // Add 10 to the number and light
    // Subtract 10 to the number and light
    // For each scenario, check if off the board, or already lit by this function
  };

  doTheThing();
  return origin;
};

const firework = () => {
  isPlayRunning = true;
  console.log('fireworks');
};

const plays = {
  fireworks: (board) => firework(board),
  cornerSweep: (board) => cornerSweep(board),
};

export default plays;

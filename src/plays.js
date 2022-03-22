import { chooseRandomCorner, generateRandomColor } from './helpers.js';

let isPlayRunning;
let play;

const usedButtons = new Set();

const edgeButtons = [19, 20, 29, 30, 39, 40, 49, 50, 59, 60, 69, 70, 79, 80, 89, 90];
const doTheThing = (button) => {
  const newLights = [];
  if (!usedButtons.has(button + 1) && isInBoundary(button + 1)) newLights.push(button + 1);
  if (!usedButtons.has(button + 10) && isInBoundary(button + 10)) newLights.push(button + 10);
  if (!usedButtons.has(button - 1) && isInBoundary(button - 1)) newLights.push(button - 1);
  if (!usedButtons.has(button - 10) && isInBoundary(button - 10)) newLights.push(button - 10);
  return newLights;
};

const isInBoundary = (button) => {
  if (button > 88 || button < 11 || edgeButtons.includes(button)) return false;
  return true;
};

const cornerSweep = (board) => {
  stopPlay(board, false);
  console.log('corner sweep');
  isPlayRunning = true;
  const origin = chooseRandomCorner();
  const color = generateRandomColor();
  board.setButtonColor(origin, color);

  let activeButtons = [];
  activeButtons.push(origin);

  let count = 0;
  play = setInterval(() => {
    count += 1;
    console.log('play #', count);
    let newButtons = [];
    activeButtons.forEach((activeButton) => {
      newButtons = [...newButtons, ...doTheThing(activeButton)];
    });
    console.log(newButtons);
    usedButtons.add(...activeButtons);
    console.log('used...', usedButtons);
    // if (newButtons.length === 0) stopPlay(board, false);
    // console.log(newButtons);
    newButtons.forEach((button) => {
      board.setButtonColor(button, color);
    });
    activeButtons = newButtons;
  }, 500);
};

const stopPlay = (board, shouldClearBoard) => {
  console.log('stopping...');
  if (isPlayRunning) clearInterval(play);
  if (shouldClearBoard) board.allOff();
  isPlayRunning = false;
};

const firework = (board) => {
  isPlayRunning = true;
  console.log('fireworks');
};

const plays = {
  stop: (board, shouldClearBoard) => stopPlay(board, shouldClearBoard),
  fireworks: (board) => firework(board),
  cornerSweep: (board) => cornerSweep(board),
};

export default plays;

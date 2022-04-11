import { colors } from 'launchpad.js';
import { cornerButtons, hexRef } from './definitions.js';
import { edgeButtons, cardinalNeighbors } from './definitions.js';
import { stop } from './plays.js';
const { colorFromHex } = colors;

export const chooseRandomCorner = () => cornerButtons[Math.floor(Math.random() * cornerButtons.length)];

export const generateRandomColor = () => {
  const result = [];

  for (let n = 0; n < 6; n += 1) {
    result.push(hexRef[Math.floor(Math.random() * 16)]);
  }
  const hex = result.join('');
  return colorFromHex(hex);
};

export const resetBoard = (board, gameName, shouldWipe) => {
  console.log(`Starting ${gameName}`);
  stop(board, shouldWipe);
  const color = generateRandomColor();
  const cells = new Set();
  for (let i = 11; i < 88; i += 1) {
    if (!edgeButtons.includes(i)) cells.add(i);
  }
  return { cells, color };
};

export const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const animatedWipe = async (board, callback) => {
  const origin = chooseRandomCorner();
  const color = generateRandomColor();
  let activeButtons = [];
  activeButtons.push(origin);
  let litButtons = new Set();
  litButtons.add(origin);
  board.setButtonColor(origin, color);

  const sweep = setInterval(async () => {
    let newButtons = [];
    activeButtons.forEach((activeButton) => {
      const { unlit } = checkNeighbors(activeButton, cardinalNeighbors, litButtons);
      newButtons = [...newButtons, ...unlit];
      newButtons.forEach((button) => litButtons.add(button));
    });
    if (newButtons.length === 0) {
      clearInterval(sweep);
      board.allOff();
      await delay(500);
      callback();
    }
    if (newButtons.length != 0) {
      newButtons.forEach((button) => {
        board.setButtonColor(button, color);
      });
    }
    activeButtons = newButtons;
  }, 100);
};

export const checkNeighbors = (button, requestedNeighbors, litButtons) => {
  const lit = [];
  const unlit = [];
  requestedNeighbors.forEach((neighbor) => {
    if (!isInBoundary(button + neighbor)) return;
    litButtons.has(button + neighbor) ? lit.push(button + neighbor) : unlit.push(button + neighbor);
  });
  return {
    lit,
    unlit,
  };
};

const isInBoundary = (button) => {
  if (button > 88 || button < 11 || edgeButtons.includes(button)) return false;
  return true;
};

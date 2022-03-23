import { colors } from 'launchpad.js';
import { cornerButtons, hexRef } from './definitions.js';
import { edgeButtons } from './definitions.js';
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

export const newPlay = (board, gameName, shouldWipe) => {
  console.log(`Starting ${gameName}`);
  stop(board, shouldWipe);
  const color = generateRandomColor();
  const cells = new Set();
  for (let i = 11; i < 88; i += 1) {
    if (!edgeButtons.includes(i)) cells.add(i);
  }
  return { cells, color };
};

const animatedWipe = (board) => {};

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

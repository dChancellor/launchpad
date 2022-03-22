import { colors } from 'launchpad.js';
import { cornerButtons, hexRef } from './definitions.js';

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

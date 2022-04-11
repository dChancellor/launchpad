import { colors } from 'launchpad.js';
const { colorFromHex } = colors;
import { shapeHash } from '../definitions.js';
import { delay, resetBoard } from '../helpers.js';

const mediumColor = colorFromHex('#E22834');
const lightColor = colorFromHex('#E95D67');
const darkColor = colorFromHex('#90141C');
const edges = [11, 21, 31, 41, 51, 61, 71, 81, 18, 28, 38, 48, 58, 68, 78, 88];

const shapes = async (board) => {
  const { cells } = await resetBoard(board, 'Shapes', true);
  const test = cells.forEach((cell) => {
    return edges.includes(cell) ? cell : null;
  });
  console.log(test);
  resetToHeart(board);
//   const sparkleAnimation = setInterval(async () => {
//     sparkle(board, rectangleShape);
//     await delay(250);
//     rectangle(board, rectangleShape);
//   }, 4000);
};

const resetToHeart = (board) => {
  shapeHash.heart.mediumCells.forEach((cell) => {
    board.setButtonColor(cell, mediumColor);
  });
  shapeHash.heart.lightCells.forEach((cell) => {
    board.setButtonColor(cell, lightColor);
  });
  shapeHash.heart.darkCells.forEach((cell) => {
    board.setButtonColor(cell, darkColor);
  });
};

const sparkle = async (board) => {
  [87, 77, 76, 67, 78].forEach((cell) => {
    board.setButtonColor(cell, lightColor);
  });
  await delay(250);
  [86, 77, 68, 66, 88].forEach((cell) => {
    board.setButtonColor(cell, lightColor);
  });
  [87, 76, 78].forEach((cell) => {
    board.setButtonColor(cell, [0, 0, 0]);
  });
  board.setButtonColor(67, mediumColor);
  await delay(250);
  [86, 88].forEach((cell) => {
    board.setButtonColor(cell, [0, 0, 0]);
  });
};

const rectangle = async (board, rectangleShape) => {
  rectangleShape.forEach((cell) => {});
};
export default shapes;

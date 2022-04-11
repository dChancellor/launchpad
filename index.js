import { LaunchpadMK2 } from 'launchpad.js';
import { functionButton, centerButtons } from './src/definitions.js';
import { generateRandomColor } from './src/helpers.js';
import { play, stop } from './src/plays.js';

const board = new LaunchpadMK2();

let activateSubMode;
let isSubModeActive = false;

board.once('ready', (name) => {
  console.log(`Connected to ${name}`);
  for (const note of centerButtons) {
    board.setButtonColor(note, generateRandomColor());
  }
});

// board.addListener('activate submenu', () => {});

// board.on('test listener', () => {
//   console.log('here');
// });

// board.on('buttonDown', (button) => {
//   isSubModeActive = false;
//   activateSubMode = setTimeout(() => {
//     board.emit('test listener');
//     isSubModeActive = true;
//   }, 2000);
// });

board.on('buttonUp', (button) => {
  // clearTimeout(activateSubMode);
  // if (button === functionButton.reset) return stop();
  if (button === functionButton.cornerSweep) return play.cornerSweeps(board, isSubModeActive);
  if (button === functionButton.firework) return play.fireworks(board, isSubModeActive);
  if (button === functionButton.gameOfLife) return play.gameOfLife(board, isSubModeActive);
  if (button === functionButton.shapes) return play.shapes(board, isSubModeActive);
  return debug(button);
});

const debug = (button) => {
  // Insert any temporary debug needed here
  console.log(button, 'was pushed');
};

import { LaunchpadMK2 } from 'launchpad.js';
import { functionButton, centerButtons } from './src/definitions.js';
import { generateRandomColor } from './src/helpers.js';
import { play, stop } from './src/plays.js';

const board = new LaunchpadMK2();

board.once('ready', (name) => {
  console.log(`Connected to ${name}`);
  for (const note of centerButtons) {
    board.setButtonColor(note, generateRandomColor());
  }
});

board.on('buttonDown', (button) => {
  if (button === functionButton.reset) return stop();
  if (button === functionButton.cornerSweep) return play.cornerSweeps(board);
  if (button === functionButton.firework) return play.fireworks(board);
  if (button === functionButton.gameOfLife) return play.gameOfLife(board);
  return debug(button);
});

const debug = (button) => {
  // Insert any temporary debug needed here
  console.log(button, 'was pushed');
};

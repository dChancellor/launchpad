import { LaunchpadMK2 } from 'launchpad.js';
import { functionButton, centerButtons } from './src/definitions.js';
import { generateRandomColor } from './src/helpers.js';
import play from './src/plays.js';

const board = new LaunchpadMK2();

board.once('ready', (name) => {
  // eslint-disable-next-line no-console
  console.log(`Connected to ${name}`);
  for (const note of centerButtons) {
    board.setButtonColor(note, generateRandomColor());
  }
});

board.on('buttonDown', (button) => {
  // eslint-disable-next-line no-console
  console.log(button, 'was pushed');
  if (button === functionButton.reset) return play.stop(board);
  if (button === functionButton.cornerSweep) return play.cornerSweep(board);
  if (button === functionButton.firework) return play.fireworks(board);
});

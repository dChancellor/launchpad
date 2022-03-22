import { LaunchpadMK2 } from 'launchpad.js';
import { functionButton, centerButtons } from './src/definitions.js';
import { generateRandomColor } from './src/helpers.js';
import play from './src/plays.js';

const lp = new LaunchpadMK2();

lp.once('ready', (name) => {
  // eslint-disable-next-line no-console
  console.log(`Connected to ${name}`);
  for (const note of centerButtons) {
    lp.setButtonColor(note, generateRandomColor());
  }
});

lp.on('buttonDown', (button) => {
  // eslint-disable-next-line no-console
  console.log(button, 'was pushed');
  if (button === functionButton.reset) return lp.allOff();
  if (button === functionButton.cornerSweep) return play.cornerSweep(lp);
  if (button === functionButton.firework) return play.fireworks(lp);
});

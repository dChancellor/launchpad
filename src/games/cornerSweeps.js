const cornerSweeps = (board, previousOrigin) => {
  if (previousOrigin) stopPlay(board, false);
  if (!previousOrigin) console.log('Starting corner sweep');
  isPlayRunning = true;
  const origin = chooseRandomCorner();
  if (origin === previousOrigin) return cornerSweeps(board, previousOrigin);
  const color = generateRandomColor();
  board.setButtonColor(origin, color);

  let activeButtons = [];
  activeButtons.push(origin);

  play = setInterval(() => {
    let newButtons = [];
    activeButtons.forEach((activeButton) => {
      const { unlit } = checkNeighbors(activeButton, cardinalNeighbors);
      newButtons = [...newButtons, ...unlit];
      newButtons.forEach((button) => litButtons.add(button));
    });
    if (newButtons.length === 0) cornerSweeps(board, origin);
    newButtons.forEach((button) => {
      board.setButtonColor(button, color);
    });
    activeButtons = newButtons;
  }, 100);
};

export default cornerSweeps;

const fireworks = (board) => {
  isPlayRunning = true;
  litButtons.add(11);
  const { lit, unlit } = checkNeighbors2(11, cardinalNeighbors);
  console.log('fireworks');
  console.log(lit);
  console.log(unlit);
};

export default fireworks;

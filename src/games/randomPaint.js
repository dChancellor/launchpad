// TODO This is a WIP
const randomPaint = (board) => {
  const color = generateRandomColor();
  for (let i = 11; i < 88; i += 1) {
    if (Math.random() < 0.05 && !edgeButtons.includes(i)) board.setButtonColor(i, color);
  }
};

export default randomPaint;

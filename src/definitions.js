export const functionButton = {
  // 'Record/Arm'
  reset: 19,
  // Up Arrow
  cornerSweep: 104,
  // Down Arrow
  firework: 105,
  gameOfLife: 106,
  shapes: 107,
};

export const cornerButtons = [11, 81, 88, 18];

export const centerButtons = [54, 55, 44, 45];

export const hexRef = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

export const edgeButtons = [19, 20, 29, 30, 39, 40, 49, 50, 59, 60, 69, 70, 79, 80, 89, 90];

export const allNeighbors = [1, 9, 10, 11, -1, -9, -10, -11];

export const cardinalNeighbors = [1, 10, -1, -10];

export const gameOfLifeSeeds = {
  spaceshipExplodes: [85, 75, 76, 67, 56, 55, 45],
};

export const shapeHash = {
  heart: {
    mediumCells: [
      62, 52, 53, 67, 56, 57, 42, 43, 44, 45, 46, 47, 33, 34, 35, 36, 24, 25, 54, 55, 63, 66, 72, 77, 61, 68, 58, 51,
      41, 48, 32, 37, 23, 26, 14, 15,
    ],
    lightCells: [53, 52, 34, 42],
    darkCells: [15, 26, 37, 48, 58, 68, 77, 36, 25, 14],
  },
};

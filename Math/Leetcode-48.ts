// https://leetcode.com/problems/rotate-image/description

/**
 Do not return anything, modify matrix in-place instead.
 */
const rotate = (matrix: number[][]): void => {
  const size = matrix.length;
  const repeat = ~~(size / 2);

  for (let i = 0; i < repeat; i++) {
    const width = size - i * 2;

    for (let j = 0; j < width - 1; j++) {
      const topL = matrix[i][i + j];
      const topR = matrix[i + j][size - i - 1];
      const bottomR = matrix[size - i - 1][size - i - 1 - j];
      const bottomL = matrix[size - i - 1 - j][i];

      matrix[i][i + j] = bottomL;
      matrix[i + j][size - i - 1] = topL;
      matrix[size - i - 1][size - i - 1 - j] = topR;
      matrix[size - i - 1 - j][i] = bottomR;
    }
  }
};

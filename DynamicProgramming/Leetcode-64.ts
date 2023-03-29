// https://leetcode.com/problems/minimum-path-sum

const minPathSum = (grid: number[][]): number => {
  const rSize = grid.length;
  const cSize = grid[0].length;

  for (let c = 1; c < cSize; c++) {
    grid[0][c] += grid[0][c - 1];
  }

  for (let r = 1; r < rSize; r++) {
    grid[r][0] += grid[r - 1][0];
  }

  for (let r = 1; r < rSize; r++) {
    for (let c = 1; c < cSize; c++) {
      grid[r][c] += Math.min(grid[r - 1][c], grid[r][c - 1]);
    }
  }

  return grid[rSize - 1][cSize - 1];
};

// https://leetcode.com/problems/unique-paths-ii

const uniquePathsWithObstacles = (obstacleGrid: number[][]): number => {
  if (obstacleGrid[0][0] === 1) {
    return 0;
  }

  const rSize = obstacleGrid.length;
  const cSize = obstacleGrid[0].length;

  const dp = Array.from(new Array(rSize), () => new Array(cSize).fill(0));

  for (let r = 0; r < rSize; r++) {
    if (obstacleGrid[r][0] === 1) {
      break;
    }
    dp[r][0] = 1;
  }

  for (let c = 0; c < cSize; c++) {
    if (obstacleGrid[0][c] === 1) {
      break;
    }
    dp[0][c] = 1;
  }

  for (let r = 1; r < rSize; r++) {
    for (let c = 1; c < cSize; c++) {
      dp[r][c] = obstacleGrid[r][c] === 0 ? dp[r - 1][c] + dp[r][c - 1] : 0;
    }
  }

  return dp[rSize - 1][cSize - 1];
};

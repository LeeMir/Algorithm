// https://leetcode.com/problems/maximal-rectangle

function maximalRectangle(matrix: string[][]): number {
  if (!matrix.length) return 0;
  const rSize = matrix.length;
  const cSize = matrix[0].length;
  const dp = Array.from(Array(rSize), () => Array(cSize).fill(0));
  let maxArea = 0;

  for (let r = 0; r < rSize; r++) {
    for (let c = 0; c < cSize; c++) {
      if (r === 0) {
        dp[r][c] = matrix[r][c] === '1' ? 1 : 0;
      } else {
        dp[r][c] = matrix[r][c] === '1' ? dp[r - 1][c] + 1 : 0;
      }

      let minHeight = dp[r][c];
      for (let i = c; i >= 0; i--) {
        if (minHeight === 0) break;
        minHeight = Math.min(minHeight, dp[r][i]);
        maxArea = Math.max(maxArea, minHeight * (c - i + 1));
      }
    }
  }
  return maxArea;
}

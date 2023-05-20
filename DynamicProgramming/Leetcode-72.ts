// https://leetcode.com/problems/edit-distance/

function minDistance(word1: string, word2: string): number {
  const memo = Array.from({ length: word1.length }, () =>
    Array.from({ length: word2.length }, () => -1)
  );

  const dp = (i: number, j: number): number => {
    if (i === -1) return j + 1;
    if (j === -1) return i + 1;

    if (memo[i][j] !== -1) {
      return memo[i][j];
    }

    if (word1.charAt(i) === word2.charAt(j)) {
      memo[i][j] = dp(i - 1, j - 1);
    } else {
      memo[i][j] = Math.min(
        dp(i, j - 1) + 1,
        dp(i - 1, j) + 1,
        dp(i - 1, j - 1) + 1
      );
    }

    return memo[i][j];
  };

  return dp(word1.length - 1, word2.length - 1);
}

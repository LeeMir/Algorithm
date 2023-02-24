// https://leetcode.com/problems/n-queens

const solveNQueens = (n: number): string[][] => {
  if (n === 1) {
    return [["Q"]];
  }

  if (n <= 3) {
    return [];
  }

  const ans: string[][] = [];
  const dp = Array(n).fill(-1);

  const makeBoard = (arr: number[]) => {
    const board = [];
    for (let i = 0; i < n; i++) {
      const str = [...".".repeat(n)];
      str[arr[i]] = "Q";
      board.push(str.join(""));
    }

    return board;
  };

  const recur = (q: number) => {
    if (q === n) {
      ans.push(makeBoard(dp));
      return;
    }

    let flag: boolean;
    for (let i = 0; i < n; i++) {
      flag = true;

      for (let j = 0; j < q; j++) {
        if (dp[j] === i || Math.abs(i - dp[j]) === Math.abs(q - j)) {
          flag = false;
          break;
        }
      }

      if (flag) {
        dp[q] = i;
        recur(q + 1);
      }
    }
  };

  recur(0);

  return ans;
};

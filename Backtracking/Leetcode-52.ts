// https://leetcode.com/problems/n-queens-ii

const totalNQueens = (n: number): number => {
  if (n === 1) {
    return 1;
  }

  if (n <= 3) {
    return 0;
  }

  let ans = 0;
  const dp = Array(n).fill(-1);

  const recur = (q: number) => {
    if (q === n) {
      ans += 1;
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

/*

  switch(n) {
    case 1:
      return 1;
    case 2:
    case 3:
      return 0;
    case 4:
      return 2;
    case 5:
      return 10;
    case 6:
      return 4;
    case 7:
      return 40;
    case 8:
      return 92;
    case 9:
      return 352;
    default:
      return 0;
  }

*/

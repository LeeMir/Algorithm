// https://leetcode.com/problems/count-and-say

const countAndSay = (n: number): string => {
  let ans = '1';

  const round = (prev: string): string => {
    const size = prev.length;
    let tmp = '';
    let cnt = 0;
    let next = '';
    for (let i = 0; i < size; i++) {
      const ch = prev[i];
      if (tmp === ch) {
        cnt += 1;
        continue;
      }
      if (tmp !== '') {
        next += `${cnt}${tmp}`;
      }
      tmp = ch;
      cnt = 1;
    }
    if (cnt !== 0) {
      next += `${cnt}${tmp}`;
    }
    return next;
  };

  for (let i = 1; i < n; i++) {
    ans = round(ans);
  }

  return ans;
};

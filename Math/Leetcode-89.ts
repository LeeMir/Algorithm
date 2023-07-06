// https://leetcode.com/problems/gray-code

function grayCode(n: number): number[] {
  const res = [0];
  for (let i = 0; i < n; i++) {
    for (let j = res.length - 1; j >= 0; j--) {
      res.push(res[j] | (1 << i));
    }
  }
  return res;
}

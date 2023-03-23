// https://leetcode.com/problems/unique-paths

/*
const facto = (p: number) => {
  let res = 1;
  for (let i = 2; i <= p; i++) {
    res *= i;
  }
  return res;
}
*/

const uniquePaths = (m: number, n: number): number => {
  const facto = [1];
  const max = m + n;

  for (let i = 1; i <= max; i++) {
    facto[i] = facto[i - 1] * i;
  }

  return facto[m + n - 2] / (facto[m - 1] * facto[n - 1]);
};

// (m - 1 + n - 1)! / ((m - 1)! (n - 1)!)

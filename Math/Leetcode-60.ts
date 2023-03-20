// https://leetcode.com/problems/permutation-sequence

const p = [1, 1, 2, 6, 24, 120, 720, 5040, 40320];

const getPermutation = (n: number, k: number): string => {
  const nums = Array(n + 1)
    .fill(-1)
    .map((_, idx) => idx);
  const ans: number[] = [];

  k -= 1;
  for (let i = n - 1; i >= 0; i--) {
    const q = ~~(k / p[i]);
    k %= p[i];

    ans.push(nums[q + 1]);
    nums.splice(q + 1, 1);
  }
  ans.push(nums[1]);
  return ans.join("");
};

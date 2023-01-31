// https://leetcode.com/problems/jump-game-ii

const jump = (nums: number[]): number => {
  const size = nums.length;
  const cache = new Array(size).fill(size);
  cache[0] = 0;

  for (let i = 0; i < size; i++) {
    const range = nums[i];
    const score = cache[i];

    for (let j = i + 1; j < i + range + 1 && j < size; j++) {
      cache[j] = Math.min(cache[j], score + 1);
    }
  }

  return cache[size - 1];
};

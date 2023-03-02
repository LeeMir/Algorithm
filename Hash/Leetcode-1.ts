// https://leetcode.com/problems/two-sum/

const twoSum = (nums: number[], target: number): number[] => {
  const size = nums.length;
  const dict = new Map();
  for (let i = 0; i < size; i++) {
    const pair = dict.get(nums[i]);
    if (pair >= 0) {
      return [i, pair];
    }
    dict.set(target - nums[i], i);
  }
  return [];
};

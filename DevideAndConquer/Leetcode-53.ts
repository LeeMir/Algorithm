// https://leetcode.com/problems/maximum-subarray

const maxSubArray = (nums: number[]): number => {
  let tmp = nums[0];
  let max = nums[0];
  const size = nums.length;

  for (let i = 1; i < size; i++) {
    tmp = Math.max(nums[i], tmp + nums[i]);
    max = Math.max(max, tmp);
  }

  return max;
};

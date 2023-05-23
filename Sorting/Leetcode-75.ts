// https://leetcode.com/problems/sort-colors

/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  const size = nums.length;
  const counts = nums.reduce(
    (pre, cur) => {
      pre[cur] += 1;
      return pre;
    },
    [0, 0, 0]
  );
  for (let i = 0; i < size; i++) {
    if (i < counts[0]) {
      nums[i] = 0;
    } else if (i < counts[0] + counts[1]) {
      nums[i] = 1;
    } else {
      nums[i] = 2;
    }
  }
}

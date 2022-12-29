// https://leetcode.com/problems/search-insert-position

const searchInsert = (nums, target) => {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    mid = ~~((left + right) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};

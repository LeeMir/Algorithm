// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

const removeDuplicates = (nums) => {
  const removedArr = [...new Set(nums)];
  const size = removedArr.length;
  
  for (let i = 0; i < size; i++) {
    nums[i] = removedArr[i];
  }

  return size;
};

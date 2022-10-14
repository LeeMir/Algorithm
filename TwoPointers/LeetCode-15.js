// https://leetcode.com/problems/3sum/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
  const size = nums.length;
  const result = [];
  
  if (size < 3) return [];
  if (size === 3) return nums.reduce((pre, cur) => pre + cur, 0) === 0 ? [[...nums]] : [];
  
  nums.sort((a, b) => a - b);
  
  for (let i = 0; i < size - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    if (nums[i] > 0) continue;
    
    let left = i + 1;
    let right = size - 1;
    
    while(left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        while(nums[left] === nums[left+1]) left++;
        while(nums[right] === nums[right-1]) right--;

        left++;
        right--;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  
  return result;
};

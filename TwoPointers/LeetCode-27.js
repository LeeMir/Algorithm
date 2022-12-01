// https://leetcode.com/problems/remove-element

const removeElement = (nums, val) => {
  const SIZE = nums.length;
  let ptr = 0;
  for (let i = 0; i < SIZE; i++) {
    if (nums[i] === val) {
      continue;
    }
    
    nums[ptr++] = nums[i];
  }
  
  return ptr;
};

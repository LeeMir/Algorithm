// https://leetcode.com/problems/product-of-array-except-self

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
  let flag = 0;
  const total = nums.reduce((pre, cur) => {
    if (cur === 0) flag++;
    return pre * (cur === 0 ? 1 : cur);
  }, 1);
  const arr = nums.map((n) => {
    if (flag > 1) return 0;
    if (n === 0 && flag === 1) return total;
    if (flag === 1) return 0;
    return total / n; // You must write an algorithm that runs in O(n) time and without using the division operation.
  });
  
  return arr;
};

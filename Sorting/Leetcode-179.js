// https://leetcode.com/problems/largest-number

/**
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber = (nums) => BigInt(
  nums.sort((a, b) => {
    const ab = `${a}${b}`;
    const ba = `${b}${a}`;

    return ba - ab;
  })
  .reduce((pre, cur) => pre + `${cur}`, ''))
  .toString();

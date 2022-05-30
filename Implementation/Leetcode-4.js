// https://leetcode.com/problems/median-of-two-sorted-arrays

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  const arr = [...nums1, ...nums2].sort((a, b) => a - b);
  const size = arr.length;
  const mid = Math.floor(size / 2);
  if (size % 2 === 0) {
    return ((arr[mid - 1] + arr[mid]) / 2);
  }
  
  return arr[mid];
};

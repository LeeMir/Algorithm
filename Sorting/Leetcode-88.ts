// https://leetcode.com/problems/merge-sorted-array

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  const size = nums1.length;
  for (let i = m; i < size; i++) {
    nums1[i] = nums2[i - m];
  }

  nums1.sort((a, b) => a - b);
}

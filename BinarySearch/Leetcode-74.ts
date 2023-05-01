// https://leetcode.com/problems/search-a-2d-matrix/

function searchMatrix(matrix: number[][], target: number): boolean {
  const arr = matrix.flat();
  let start = 0;
  let end = arr.length - 1;
  let mid: number;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (target === arr[mid]) {
      return true;
    }

    if (target < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return false;
}

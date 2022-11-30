// https://leetcode.com/problems/set-matrix-zeroes/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = (matrix) => {
  const rowSize = matrix.length;
  const colSize = matrix[0].length;
  let flag = false;
  
  for (let i = 0; i < rowSize; i++) {
    if (matrix[i][0] === 0) {
      flag = true;
    }
    for (let j = 1; j < colSize; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }
  
  for (let i = 1; i < rowSize; i++) {
    for (let j = 1; j < colSize; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }
  
  if (matrix[0][0] === 0) {
    for (let i = 1; i < colSize; i++) {
      matrix[0][i] = 0;
    }
  }
  
  if (flag) {
    for (let i = 0; i < rowSize; i++) {
      matrix[i][0] = 0;
    }
  }
};

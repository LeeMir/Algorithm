// https://leetcode.com/problems/valid-sudoku/submissions

/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = (board) => {
  const arrs = {};
  
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const ch = board[i][j];
      
      if (ch === '.') continue;
      
      const rowKey = `r${i}${ch}`;
      const colKey = `c${j}${ch}`;
      const boxKey = `b${parseInt(i / 3)}${parseInt(j / 3)}${ch}`;
      
      if (arrs[rowKey]) return false;
      if (arrs[colKey]) return false;
      if (arrs[boxKey]) return false;
      
      arrs[rowKey] = true;
      arrs[colKey] = true;
      arrs[boxKey] = true;
      
    }
  }
  
  return true;
};

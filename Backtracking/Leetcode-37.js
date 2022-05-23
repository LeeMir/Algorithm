// https://leetcode.com/problems/sudoku-solver

const input = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];

let Board;

const isValid = (r, c, num) => {
  for (let i = 0; i < 9; i++) {
    if (Board[r][i] == num) {
      return false;
    }
  }
  for (let i = 0; i < 9; i++) {
    if (Board[i][c] == num) {
      return false;
    }
  }
  
  const startR = r - (r % 3);
  const startC = c - (c % 3);
  
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (Board[startR + i][startC + j] === num) {
        return false;
      }
    }
  }

  return true;
};

const dfs = (r, c) => {
  if (r === 8 && c === 9) {
    return true;
  }
  
  if (c === 9) {
    r++;
    c = 0;
  }
  
  if (Board[r][c] !== 0) {
    return dfs(r, c + 1);
  }
  
  for (let n = 1; n <= 9; n++) {
    if (isValid(r, c, n)) {
      Board[r][c] = n;
      if (dfs(r, c + 1)) {
        return true;
      }
    }
    Board[r][c] = 0;
  }
  
  return false;
};

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solveSudoku = (board) => {
  Board = board.map((line) => line.map(elem => elem === '.' ? 0 : parseInt(elem)));
  dfs(0, 0);

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      board[i][j] = `${Board[i][j]}`;
    }
  }

  return board;
};

console.log(solveSudoku(input));

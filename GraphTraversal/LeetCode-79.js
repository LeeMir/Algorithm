// https://leetcode.com/problems/word-search/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = (board, word) => {
  if (!board || !word || board.length === 0) { //edge case
    return false;
  }
  
  const m = board.length;
  const n = board[0].length;
  
  const dfs = (r, c, idx) => {
    if (idx === word.length) {
      return true;
    }
  
    if (board[r][c] !== word[idx]) {
      return false;
    }
    
    if (word.length === 1) {
      return true;
    }
        
    const tmp = board[r][c];
    board[r][c] = '*';
    
    let result = false;
    
    if (r > 0 && !result) {
      result = result || dfs(r - 1, c, idx + 1);
    }
    if (r < m - 1 && !result) {
      result = result || dfs(r + 1, c, idx + 1);
    }
    if (c > 0 && !result) {
      result = result || dfs(r, c - 1, idx + 1);
    }
    if (c < n - 1 && !result) {
      result = result || dfs(r, c + 1, idx + 1);
    }
    
    board[r][c] = tmp;
        
    return result;
  };
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j, 0)) {
        return true;
      }
    }
  }
    
  return false;
};

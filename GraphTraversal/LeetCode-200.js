// https://leetcode.com/problems/number-of-islands/

let visited;
let map;
let maxR = 0;
let maxC = 0;

const dfs = (r, c) => {
  if (visited[r][c]) return 0;
  
  visited[r][c] = true;
  
  if (r - 1 >= 0 && map[r - 1][c] === '1' && !visited[r - 1][c]) dfs(r - 1, c);
  if (r + 1 < maxR && map[r + 1][c] === '1' && !visited[r + 1][c]) dfs(r + 1, c);
  if (c - 1 >= 0 && map[r][c - 1] === '1' && !visited[r][c - 1]) dfs(r, c - 1);
  if (c + 1 < maxC && map[r][c + 1] === '1' && !visited[r][c + 1]) dfs(r, c + 1);
  
  return 1;
};


const numIslands = (grid) => {
  map = grid;
  maxR = grid.length;
  maxC = grid[0].length;
  visited = Array.from(new Array(maxR), () => new Array(maxC).fill(false));
  let ans = 0;
  for (let r = 0; r < maxR; r++) {
    for (let c = 0; c < maxC; c++) {
      if (map[r][c] === '1') {
        ans += dfs(r, c);
      }
    }
  }
  
  return ans;
};

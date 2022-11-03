// https://leetcode.com/problems/pacific-atlantic-water-flow/

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
const pacificAtlantic = (heights) => {
  const m = heights.length;
  const n = heights[0].length;
  
  const bfs = (ocean) => {
    const visited = Array.from(Array(m), () => Array(n).fill(false));
    const q = [...ocean];
    
    while(q.length > 0) {
      const {r, c} = q.pop();
      
      visited[r][c] = true;
      
      const height = heights[r][c];
      
      if (r > 0 && height <= heights[r - 1][c] && !visited[r - 1][c]) {
        q.push({r: r - 1, c: c});
      }
      if (r < m - 1 && height <= heights[r + 1][c] && !visited[r + 1][c]) {
        q.push({r: r + 1, c: c});
      }
      if (c > 0 && height <= heights[r][c - 1] && !visited[r][c - 1]) {
        q.push({r: r, c: c - 1});
      }
      if (c < n - 1 && height <= heights[r][c + 1] && !visited[r][c + 1]) {
        q.push({r: r, c: c + 1});
      }
    }
    
    return visited;
  }
  
  const pacific = [];
  const atlantic = [];
  
  for (let i = 0; i < m; i++) {
    pacific.push({r: i, c: 0});
    atlantic.push({r: i, c: n - 1});
  }
  
  for (let j = 0; j < n; j++) {
    pacific.push({r: 0, c: j});
    atlantic.push({r: m - 1, c: j});
  }
  
  const pacificVisited = bfs(pacific);
  const atlanticVisited = bfs(atlantic);
  
  const result = [];
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (pacificVisited[i][j] && atlanticVisited[i][j]) {
        result.push([i, j]);
      }
    }
  }
  
  return result;
};

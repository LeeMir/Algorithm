// https://programmers.co.kr/learn/courses/30/lessons/67259

const solution = (board) => {
  return bfs(board);
};

const bfs = (board) => {
  const q = [];
  const N = board.length;
  const record = Array.from(Array(N), () => Array.from(Array(N), () => Array(4).fill(-1)));
  
  if (board[1][0] === 0) {
    q.push({ x: 1, y: 0, dir: 1, cost: 100 }); // dir: { 0, 1, 2, 3 } = { U, D, L, R }
  }

  if (board[0][1] === 0) {
    q.push({ x: 0, y: 1, dir: 3, cost: 100 });
  }

  while(q.length > 0) {
    const { x, y, dir, cost } = q.shift();

    if (record[x][y][dir] !== -1 && record[x][y][dir] <= cost) {
      continue;
    }

    record[x][y][dir] = cost;

    if (x === N - 1 && y === N - 1) {
      continue;
    }

    if (x > 0 && dir !== 1 && board[x - 1][y] === 0) {
      const nextCost = cost + ((dir === 0) ? 100 : 600);
      const nextRecord = record[x - 1][y][0];
      if (nextRecord === -1 || nextCost < nextRecord) {
        q.push({ x: x - 1, y, dir: 0, cost: nextCost });
      }
    }

    if (x < N - 1 && dir !== 0 && board[x + 1][y] === 0) {
      const nextCost = cost + ((dir === 1) ? 100 : 600);
      const nextRecord = record[x + 1][y][1];
      if (nextRecord === -1 || nextCost < nextRecord) {
        q.push({ x: x + 1, y, dir: 1, cost: nextCost });
      }
    }

    if (y > 0 && dir !== 3 && board[x][y - 1] === 0) {
      const nextCost = cost + ((dir === 2) ? 100 : 600);
      const nextRecord = record[x][y - 1][2];
      if (nextRecord === -1 || nextCost < nextRecord) {
        q.push({ x, y: y - 1, dir: 2, cost: nextCost });
      }
    }

    if (y < N - 1 && dir !== 2 && board[x][y + 1] === 0) {
      const nextCost = cost + ((dir === 3) ? 100 : 600);
      const nextRecord = record[x][y + 1][3];
      if (nextRecord === -1 || nextCost < nextRecord) {
        q.push({ x, y: y + 1, dir: 3, cost: nextCost });
      }
    }
  }
  
  if (record[N - 1][N - 1][1] === -1) return record[N - 1][N - 1][3];
  if (record[N - 1][N - 1][3] === -1) return record[N - 1][N - 1][1];
  return Math.min(record[N - 1][N - 1][1], record[N - 1][N - 1][3]);

};
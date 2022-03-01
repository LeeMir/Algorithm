// https://programmers.co.kr/learn/courses/30/lessons/92344

const solution = (board, skill) => {
  const ROW = board.length;
  const COL = board[0].length;
  const IMOS = Array.from(Array(ROW + 1), () => new Array(COL + 1).fill(0));
  
  for (let i = 0; i < skill.length; i++) {
    const [type, r1, c1, r2, c2, degree] = skill[i];
    if (type === 1) {
      IMOS[r1][c1] -= degree;
      IMOS[r1][c2 + 1] += degree;
      IMOS[r2 + 1][c1] += degree;
      IMOS[r2 + 1][c2 + 1] -= degree;
    } else {
      IMOS[r1][c1] += degree;
      IMOS[r1][c2 + 1] -= degree;
      IMOS[r2 + 1][c1] -= degree;
      IMOS[r2 + 1][c2 + 1] += degree;
    }
  }
  
  for (let i = 0; i < ROW; i++) {
    for (let j = 1; j < COL; j++) {
      IMOS[i][j] += IMOS[i][j - 1];
    }
  }
  
  for (let j = 0; j < COL; j++) {
    for (let i = 1; i < ROW; i++) {
      IMOS[i][j] += IMOS[i - 1][j];
    }
  }
  
  let answer = 0;
  for (let i = 0; i < ROW; i++) {
    for (let j = 0; j < COL; j++) {
      board[i][j] += IMOS[i][j];
      
      if (board[i][j] > 0) {
        answer++;
      }
    }
  }

  return answer;
}

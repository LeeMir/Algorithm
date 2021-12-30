// https://www.acmicpc.net/problem/11726

const fs = require('fs');

const example = `4 3
1 2 3 4
2 3 4 5
3 4 5 6
4 5 6 7
2 2 3 4
3 4 3 4
1 1 4 4`;

const main = () => {
  const [T, ...input] = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString().trim()
    : example
  ).split('\n');
  const [N, M] = T.split(' ').map((elem => parseInt(elem, 10)));
  const cell = input.slice(0, N).map((line) => line.split(' ').map((elem => parseInt(elem, 10))));
  const quest = input.slice(N).map((line) => line.split(' ').map((elem => parseInt(elem, 10))));
  const accumCell = Array.from(Array(N), () => Array(N));
  let result = '';
  accumCell[0][0] = cell[0][0];
  for (let i = 1; i < N; i++) {
    accumCell[0][i] = accumCell[0][i - 1] + cell[0][i];
    accumCell[i][0] = accumCell[i - 1][0] + cell[i][0];
  }
  for (let i = 1; i < N; i++) {
    for (let j = 1; j < N; j++) {
      accumCell[i][j] = accumCell[i - 1][j] + accumCell[i][j - 1] - accumCell[i - 1][j - 1] + cell[i][j];
    }
  }
  for (let i = 0; i < M; i++) {
    result += `${solution(accumCell, quest[i])}\n`;
  }
  console.log(result);
};

const solution = (cell, input) => {
  const [x1, y1, x2, y2] = input.map(elem => elem - 1);
  if (x1 === 0 && y1 === 0) return cell[x2][y2];
  if (x1 === 0) return cell[x2][y2] - cell[x2][y1 - 1];
  if (y1 === 0) return cell[x2][y2] - cell[x1 - 1][y2];
  return cell[x2][y2] - cell[x1 - 1][y2] - cell[x2][y1 - 1] + cell[x1 - 1][y1 - 1];
};

main();

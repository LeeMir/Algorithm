// https://www.acmicpc.net/problem/17144

const fs = require('fs');

const example = `7 8 1
0 0 0 0 0 0 0 9
0 0 0 0 3 0 0 8
-1 0 5 0 0 0 22 0
-1 8 0 0 0 0 0 0
0 0 0 0 0 10 43 0
0 0 5 0 15 0 0 0
0 0 40 0 0 0 20 0`;

let upFilter, downFilter;

const main = () => {
  const [config, ...input] = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString().trim()
    : example
  ).split('\n');
  const [R, C, T] = config.split(' ').map((elem => parseInt(elem)));
  const map = input.map((line) => line.split(' ').map((elem => parseInt(elem))));
  console.log(solution(R, C, T, map));
};

const findFilter = (R, map) => {
  for (let i = 0; i < R; i++) {
    if (map[i][0] === -1) {
      upFilter = i;
      downFilter = i + 1;
      break;
    }
  }
};

const spread = (R, C, map) => {
  const copiedMap = map.map((arr) => [...arr]);
  let elem, num;
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      elem = map[i][j];
      if (elem === 0 || elem === -1) continue;
      cnt = 0;
      num = Math.floor(elem / 5);
      if (i !== 0 && map[i - 1][j] !== -1) {
        copiedMap[i - 1][j] += num;
        copiedMap[i][j] -= num;
        cnt++;
      }
      if (i !== R - 1 && map[i + 1][j] !== -1) {
        copiedMap[i + 1][j] += num;
        copiedMap[i][j] -= num;
        cnt++;
      }
      if (j !== 0 && map[i][j - 1] !== -1) {
        copiedMap[i][j - 1] += num;
        copiedMap[i][j] -= num;
        cnt++;
      }
      if (j !== C - 1 && map[i][j + 1] !== -1) {
        copiedMap[i][j + 1] += num;
        copiedMap[i][j] -= num;
        cnt++;
      }
    }
  }
  return copiedMap;
};

const cycle = (R, C, map) => {
  const copiedMap = map.map((arr) => [...arr]);
  let i;

  // upFilter
  for (i = 1; i < upFilter; i++) { // down
    copiedMap[i][0] = map[i - 1][0];
  }
  for (i = upFilter - 1; i >= 0; i--) { // up
    copiedMap[i][C - 1] = map[i + 1][C - 1];
  }

  // downFilter
  for (i = R - 2; i > downFilter; i--) { // up
    copiedMap[i][0] = map[i + 1][0];
  }
  for (i = downFilter + 1; i < R; i++) { // down
    copiedMap[i][C - 1] = map[i - 1][C - 1];
  }

  // common
  for (i = 1; i < C; i++) { // right
    copiedMap[upFilter][i] = map[upFilter][i - 1]; // upFilter
    copiedMap[downFilter][i] = map[downFilter][i - 1]; // downFilter
  }
  for (i = C - 2; i >= 0; i--) { // left
    copiedMap[0][i] = map[0][i + 1]; // upFilter
    copiedMap[R - 1][i] = map[R - 1][i + 1]; // downFilter
  }

  copiedMap[upFilter][1] = 0;
  copiedMap[downFilter][1] = 0;
  return copiedMap;
};

const solution = (R, C, T, map) => {
  findFilter(R, map);
  for (let i = 0; i < T; i++) {
    map = spread(R, C, map);
    map = cycle(R, C, map);
  }
  const answer = map.reduce((pre, cur) => {
    pre += cur.reduce((pElem, cElem) => pElem + cElem, 0);
    return pre;
  }, 0);
  return (answer + 2);
};

main();

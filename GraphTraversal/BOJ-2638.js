// https://www.acmicpc.net/problem/2638

const fs = require('fs');

const example = `8 9
0 0 0 0 0 0 0 0 0
0 0 0 1 1 0 0 0 0
0 0 0 1 1 0 1 1 0
0 0 1 1 1 1 1 1 0
0 0 1 1 1 1 1 0 0
0 0 1 1 0 1 1 0 0
0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0`;

const main = () => {
  const [config, ...input] = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString().trim()
    : example
  ).split('\n');
  const [N, M] = config.split(' ').map((elem => parseInt(elem)));
  const map = input.map((line) => line.split(' ').map((elem => parseInt(elem))));
  console.log(solution(N, M, map));
};

let visited, cntMap, willGoneArr;

const searchCheese = (N, M, r, c, map) => {
  visited[r][c] = true;
  if (r > 0 && !visited[r - 1][c]) {
    if (map[r - 1][c] === 1) {
      cntMap[r - 1][c] += 1;
      if (cntMap[r - 1][c] === 2) {
        willGoneArr.push({ r: r - 1, c});
      }
    } else {
      searchCheese(N, M, r - 1, c, map);
    }
  }
  if (r < N - 1 && !visited[r + 1][c]) {
    if (map[r + 1][c] === 1) {
      cntMap[r + 1][c] += 1;
      if (cntMap[r + 1][c] === 2) {
        willGoneArr.push({ r: r + 1, c});
      }
    } else {
      searchCheese(N, M, r + 1, c, map);
    }
  }
  if (c > 0 && !visited[r][c - 1]) {
    if (map[r][c - 1] === 1) {
      cntMap[r][c - 1] += 1;
      if (cntMap[r][c - 1] === 2) {
        willGoneArr.push({ r: r, c: c - 1});
      }
    } else {
      searchCheese(N, M, r, c - 1, map);
    }
  }
  if (c < M - 1 && !visited[r][c + 1]) {
    if (map[r][c + 1] === 1) {
      cntMap[r][c + 1] += 1;
      if (cntMap[r][c + 1] === 2) {
        willGoneArr.push({ r: r, c: c + 1});
      }
    } else {
      searchCheese(N, M, r, c + 1, map);
    }
  }
};

const removeCheese = (map) => {
  willGoneArr.forEach(point => {
    const { r, c } = point;
    map[r][c] = 0;
  });
};

const solution = (N, M, map) => {
  let time = 0;
  let cnt = map.reduce((pre, cur) => pre + cur.filter((elem) => elem === 1).length, 0);

  while (cnt > 0) {
    visited = Array.from(Array(N), () => Array(M).fill(false));
    cntMap = Array.from(Array(N), () => Array(M).fill(0));
    willGoneArr = [];
    searchCheese(N, M, 0, 0, map);
    removeCheese(map);
    cnt -= willGoneArr.length;
    time++;
  }

  return time;
};

main();

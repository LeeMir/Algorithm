// https://www.acmicpc.net/problem/18808

const fs = require('fs');

const example = `5 4 4
3 3
1 0 1
1 1 1
1 0 1
2 5
1 1 1 1 1
0 0 0 1 0
2 3
1 1 1
1 0 1
3 3
1 0 0
1 1 1
1 0 0`;

const main = () => {
  const [config, ...input] = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString().trim()
    : example
  ).split('\n');
  const [N, M, K] = config.split(' ').map((elem => parseInt(elem)));
  let idx = -1;
  let start = 0;
  let end = 0;
  const pieces = input.reduce((pre, line, cidx) => {
    if (cidx === end) {
      const [R, C] = line.split(' ').map((elem => parseInt(elem)));
      idx += 1;
      pre[idx] = { R, C, cnt: 0 };
      pre[idx].piece = Array.from(Array(R), () => Array(C));
      start = cidx + 1;
      end += R + 1;
    } else {
      const arr = line.split(' ').map((elem) => parseInt(elem));
      pre[idx].piece[cidx - start] = arr;
      pre[idx].cnt += arr.reduce((pre, cur) => pre + cur, 0);
    }
    return pre;
  }, []);
  console.log(solution(N, M, pieces));
};

const rotate = (matrix) => {
  const maxIdx = matrix.length - 1;
  const R = matrix.length;
  const C = matrix[0].length;
  const newMatrix = Array.from(Array(C), () => Array(R).fill(0));

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      newMatrix[j][maxIdx - i] = matrix[i][j];
    }
  }

  return newMatrix;
}

const isMatchedPiece = (r, c, R, C, N, M, map, piece) => {
  if (r + R - 1 >= N || c + C - 1 >= M) {
    return false;
  }

  const copiedMap = map.map((arr) => [...arr]);
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (piece[i][j] === 1) {
        if (map[i + r][j + c] === 1) {
          return false;
        } else {
          copiedMap[i + r][j + c] = 1;
        }
      }
    }
  }

  return copiedMap;
};

const isMatchedMap = (N, M, map, data) => {
  const { R, C, piece } = data;
  const piece90 = rotate(piece);
  const piece180 = rotate(piece90);
  const piece270 = rotate(piece180);

  let flag = false;
  let temp = map;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      temp = isMatchedPiece(i, j, R, C, N, M, map, piece);
      if (temp !== false) {
        flag = true;
        break;
      }
    }
    if (flag) {
      break;
    }
  }

  if (!flag) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        temp = isMatchedPiece(i, j, C, R, N, M, map, piece90);
        if (temp !== false) {
          flag = true;
          break;
        }
      }
      if (flag) {
        break;
      }
    }
  }

  if (!flag) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        temp = isMatchedPiece(i, j, R, C, N, M, map, piece180);
        if (temp !== false) {
          flag = true;
          break;
        }
      }
      if (flag) {
        break;
      }
    }
  }

  if (!flag) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        temp = isMatchedPiece(i, j, C, R, N, M, map, piece270);
        if (temp !== false) {
          flag = true;
          break;
        }
      }
      if (flag) {
        break;
      }
    }
  }

  if (flag) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        map[i][j] = temp[i][j];
      }
    }
  }
  return flag;
};

const solution = (N, M, pieces) => {
  const map = Array.from(Array(N), () => Array(M).fill(0));
  return pieces.reduce((pre, cur) => {
    if (isMatchedMap(N, M, map, cur)) {
      pre += cur.cnt;
    }
    return pre;
  }, 0);
};

main();

// https://www.acmicpc.net/problem/14502

const fs = require('fs');

const example = `8 8
2 0 0 0 0 0 0 2
2 0 0 0 0 0 0 2
2 0 0 0 0 0 0 2
2 0 0 0 0 0 0 2
2 0 0 0 0 0 0 2
0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0`;

class Queue {
  constructor() {
    this.queue = {};
    this.front = 0;
    this.rear = 0;
  }

  size() {
    if (!this.queue[this.rear]) {
      return 0;
    } else {
      return this.rear - this.front + 1;
    }
  }

  push(value) {
    if (this.size() === 0) {
      this.queue[0] = value;
    } else {
      this.rear++;
      this.queue[this.rear] = value;
    }
  }

  pop() {
    let temp;
    if (this.front === this.rear) {
      temp = this.queue[this.front];
      delete this.queue[this.front];
      this.front = 0;
      this.rear = 0;
    } else {
      temp = this.queue[this.front];
      delete this.queue[this.front];
      this.front += 1;
    }
    return temp;
  }

  isEmpty() {
    return this.size() === 0;
  }
}

const CONSTANT = {
  ROAD: 0,
  WALL: 1,
  VIRUS: 2,
};

const main = () => {
  const [T, ...input] = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString().trim()
    : example
  ).split('\n');
  const [N, M] = T.split(' ').map((elem => parseInt(elem, 10)));
  const map = input.map((line) => line.split(' ').map((elem => parseInt(elem, 10))));
  Object.freeze(CONSTANT);
  console.log(solution(N, M, map));
};

const copiedMap = (map) => map.map((arr) => [...arr]);
let answer = -1;

const solution = (N, M, map) => {
  let walledMap = copiedMap(map);
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (walledMap[i][j] === CONSTANT.ROAD) {
        walledMap[i][j] = CONSTANT.WALL;
        makeWall(N, M, walledMap, 1);
        walledMap = copiedMap(map);
      }
    }
  }
  return answer;
};

const makeWall = (N, M, map, wallCnt) => {
  if (wallCnt === 3) {
    answer = Math.max(answer, bfs(N, M, map));
    return;
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] === CONSTANT.ROAD) {
        const tempMap = copiedMap(map);
        tempMap[i][j] = CONSTANT.WALL;
        makeWall(N, M, tempMap, wallCnt + 1);
      }
    }
  }
};

const bfs = (N, M, map) => {
  const queue = new Queue();
  const check = Array.from(Array(N), () => new Array(M).fill(false));
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] === CONSTANT.VIRUS) {
        queue.push({i, j});
      }
    }
  }

  while (1) {
    if (queue.isEmpty()) {
      break;
    }

    const cur = queue.pop();
    const {i, j} = cur;
    check[i][j] = true;

    map[i][j] = CONSTANT.VIRUS;

    if (j - 1 >= 0 && !check[i][j - 1] && map[i][j - 1] === CONSTANT.ROAD) {
      queue.push({i, j: j - 1});
    }
    if (j + 1 < M && !check[i][j + 1] && map[i][j + 1] === CONSTANT.ROAD) {
      queue.push({i, j: j + 1});
    }
    if (i - 1 >= 0 && !check[i - 1][j] && map[i - 1][j] === CONSTANT.ROAD) {
      queue.push({i: i - 1, j});
    }
    if (i + 1 < N && !check[i + 1][j] && map[i + 1][j] === CONSTANT.ROAD) {
      queue.push({i: i + 1, j});
    }
  }

  return map.reduce((pre, cur) => {
    pre += cur.filter(elem => elem === CONSTANT.ROAD).length;
    return pre;
  }, 0);
};

main();

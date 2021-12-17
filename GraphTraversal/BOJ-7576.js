// https://www.acmicpc.net/problem/7576

const fs = require('fs');

const example = `2 2
1 -1
-1 1`;

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
}

const main = () => {
  const [T, ...input] = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString().trim()
    : example
  ).split('\n');
  const [M, N] = T.split(' ').map((elem => parseInt(elem, 10)));
  const box = input.map((line) => line.split(' ').map((elem => parseInt(elem, 10))));
  console.log(solution(M, N, box));
}

let calendar;

const solution = (M, N, box) => {
  let maxDay = 0;
  bfs(M, N, box);
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (box[i][j] === 0) {
        return -1;
      }
      if (calendar[i][j]) {
        maxDay = Math.max(maxDay, calendar[i][j]);
      }
    }
  }
  return maxDay;
};

const bfs = (M, N, box) => {
  const queue = new Queue();
  calendar = Array.from(Array(N), () => new Array(M));
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (box[i][j] === 1) {
        queue.push({i, j});
        calendar[i][j] = 0;
      }
    }
  }
  while (queue.size() > 0) {
    const {i, j} = queue.pop();
    const day = calendar[i][j];
    if (i > 0 && box[i - 1][j] === 0) {
      box[i - 1][j] = 1;
      calendar[i - 1][j] = day + 1;
      queue.push({i: i - 1, j});
    }
    if (i < N - 1 && box[i + 1][j] === 0) {
      box[i + 1][j] = 1;
      calendar[i + 1][j] = day + 1;
      queue.push({i: i + 1, j});
    }
    if (j > 0 && box[i][j - 1] === 0) {
      box[i][j - 1] = 1;
      calendar[i][j - 1] = day + 1;
      queue.push({i, j: j - 1});
    }
    if (j < M - 1 && box[i][j + 1] === 0) {
      box[i][j + 1] = 1;
      calendar[i][j + 1] = day + 1;
      queue.push({i, j: j + 1});
    }
  }
};

main();

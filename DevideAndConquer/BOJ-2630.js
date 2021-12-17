// https://www.acmicpc.net/problem/2630

const fs = require('fs');

const example = `2
1 1
1 1`;

const main = () => {
  const [T, ...input] = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString().trim()
    : example
  ).split('\n');
  const paper = input.map((line) => line.split(' ').map((elem => parseInt(elem, 10))));
  solution(paper);
}

let blue = 0;
let white = 0;

const solution = (paper) => {
  recursion(paper);
  console.log(`${white}\n${blue}`);
};

const recursion = (paper) => {
  if (paper.length === 1 || isOneColor(paper)) {
    if (paper[0][0] === 0) {
      white++;
    } else {
      blue++;
    }
  } else {
    const n = paper.length;
    const paperA = paper.slice(0, n / 2).map((line) => line.slice(0, n / 2));
    const paperB = paper.slice(0, n / 2).map((line) => line.slice(n / 2));
    const paperC = paper.slice(n / 2).map((line) => line.slice(0, n / 2));
    const paperD = paper.slice(n / 2).map((line) => line.slice(n / 2));
    recursion(paperA);
    recursion(paperB);
    recursion(paperC);
    recursion(paperD);
  }
};

const isOneColor = (paper) => {
  for (let i = 0; i < paper.length; i++) {
    for (let j = 0; j < paper.length; j++) {
      if (paper[i][j] !== paper[0][0]) {
        return false;
      }
    }
  }
  return true;
};

main();

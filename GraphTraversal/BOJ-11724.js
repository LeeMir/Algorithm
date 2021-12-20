// https://www.acmicpc.net/problem/11724

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let N, M;
let check = [];

const main = () => {
  let inputCnt = 0;
  let edge;
  rl.on('line', (line) => {
    const input = line.split(' ').map((elem) => parseInt(elem));
    if (inputCnt === 0) {
      [N, M] = input;
      edge = Array.from(Array(N + 1), () => []);
      check = Array.from(Array(N + 1), () => false);
    } else {
      edge[input[0]].push(input[1]);
      edge[input[1]].push(input[0]);
    }
    inputCnt++;
    if (inputCnt === M + 1) {
      solution(edge);
      rl.close();
    }
  }).on('close', () => {
    process.exit();
  });
};

const solution = (edge) => {
  const vertexNum = edge.length;
  let result = 0;
  for (let i = 1; i <= vertexNum; i++) {
    if (check[i] === false) {
      dfs(edge, i);  
      result++;
    }
  }
  console.log(result);
};

const dfs = (edge, i) => {
  check[i] = true;
  edge[i]
    .filter((vertex) => !check[vertex])
    .forEach((vertex) => dfs(edge, vertex));
};

main();

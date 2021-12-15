// https://www.acmicpc.net/problem/9095

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let T;

const main = () => {
  let inputCnt = 0;

  rl.on('line', (line) => {
    const input = parseInt(line);
    if (inputCnt === 0) {
      T = input;
    } else {
      console.log(solution(input));
    }
    inputCnt++;
    if (inputCnt === T + 1) {
      rl.close();
    }
  }).on('close', () => {
    process.exit();
  });
};

const cache = [0, 1, 2, 4];
let ptr = 4;

const solution = (n) => {
  if (cache[n]) {
    return cache[n];
  }
  for (let i = ptr; i <= n; i++) {
    cache[i] = cache[i-1] + cache[i-2] + cache[i-3];
  }
  ptr = n + 1;
  return cache[n];
};

main();

// https://www.acmicpc.net/problem/11444

/*
  도가뉴 항등식
  a(2n) = a(n)[a(n) + 2 a(n - 1)]
  a(2n + 1) = a(n) ** 2 + a(n + 1) ** 2
*/

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const main = () => {
  rl.on('line', (line) => {
    const input = BigInt(line);
    console.log(solution(input));
    rl.close();
  }).on('close', () => {
    process.exit();
  });
};

const cache = [0n, 1n, 1n, 2n, 3n, 5n, 8n, 13n, 21n, 34n, 55n];

const solution = (n) => {
  return Number(fibo(n));
};

const fibo = (n) => {
  if (cache[n]) {
    return cache[n];
  } else {
    if (n % 2n === 0n) {
      const a = fibo(n / 2n);
      const b = fibo((n / 2n) - 1n);
      cache[n] = (a * (a + 2n * b)) % 1000000007n;
    } else {
      const a = fibo(n / 2n);
      const b = fibo((n / 2n) + 1n);
      cache[n] = (a * a + b * b) % 1000000007n;
    }
  }
  return cache[n];
};

main();

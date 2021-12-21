// https://www.acmicpc.net/problem/1629

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const main = () => {
  rl.on('line', (line) => {
    const [A, B, C] = line.split(' ').map(elem => parseInt(elem));
    console.log(solution(A, B, C));
    rl.close();
  }).on('close', () => {
    process.exit();
  });
};

const solution = (A, B, C) => {
  return Number(pow(BigInt(A), B, BigInt(C)));
};

const pow = (A, B, C) => {
  if (B === 1) {
    return A % C;
  }

  const half = pow(A, Math.floor(B / 2), C) % C;

  if (B % 2 === 1) {
    return ((half * half % C) * (A % C)) % C;
  } else {
    return (half * half) % C;
  }
};

main();

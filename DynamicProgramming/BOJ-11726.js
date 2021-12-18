// https://www.acmicpc.net/problem/11726

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const main = () => {
  let input;
  rl.on('line', function(line){
    input = parseInt(line);
    rl.close();
  }).on('close', function(){
    solution(input);
    process.exit();
  });
};

// a[n] = a[n-1] + a[n-2]

const solution = (n) => {
  cache = [1, 1, 2, 3];
  for (let i = 4; i <= n; i++) {
    cache[i] = (cache[i - 1] + cache[i - 2]) % 10007;
  }
  console.log(cache[n]);
};

main();

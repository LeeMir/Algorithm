// https://www.acmicpc.net/problem/16234

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let N, L, R;
const map = [];

const main = () => {
  let lineCnt = 0;

  rl.on('line', function(line){
    if (lineCnt === 0) {
      [N, L, R] = (line.split(' ').map((el) => parseInt(el)));
    } else {
      map.push(line.split(' ').map((el) => parseInt(el)));
    }
    lineCnt++;
    if (N === lineCnt - 1) {
      rl.close();
    }
  }).on('close', function(){
    solution();
    process.exit();
  });
};

let check = [];
let have2Move = [];
let sum = 0;

const initCheck = () => {
  check = Array.from(Array(N), () => Array(N).fill(false)); // check[N][N]: boolean
};

const solution = () => {
  let day = 0;
  while (1) {
    initCheck();
    let flag = false;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (!check[i][j]) {
          have2Move = [];
          sum = 0;
          dfs(i, j);
          if (have2Move.length > 1) {
            const average = Math.floor(sum / have2Move.length);
            movePeople(average);
            flag = true;
          }
        }
      }
    }
    if (!flag) {
      break;
    }
    day++;
  }
  console.log(day);
};

const movePeople = (average) => {
  have2Move.forEach((city) => {
    map[city.i][city.j] = average;
  });
};

const dfs = (i, j) => {
  check[i][j] = true;
  have2Move.push({i, j});
  const val = map[i][j];
  sum += val;

  if (i - 1 >= 0 && !check[i - 1][j] && isOkay(map[i - 1][j], val)) {
    dfs(i - 1, j);
  }
  if (j - 1 >= 0 && !check[i][j - 1] && isOkay(map[i][j - 1], val)) {
    dfs(i, j - 1);
  }
  if (i + 1 < N && !check[i + 1][j] && isOkay(map[i + 1][j], val)) {
    dfs(i + 1, j);
  }
  if (j + 1 < N && !check[i][j + 1] && isOkay(map[i][j + 1], val)) {
    dfs(i, j + 1);
  }
};

const isOkay = (a, b) => Math.abs(a - b) >= L && Math.abs(a - b) <= R;

main();

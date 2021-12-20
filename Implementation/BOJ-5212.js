// https://www.acmicpc.net/problem/5212

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

String.prototype.replaceAt = function (idx, char) {
  return `${this.slice(0, idx)}${char}${this.slice(idx + 1)}`;
}

let C, R;
const map = [];

const main = () => {
  let lineCnt = 0;

  rl.on('line', function(line){
    if (lineCnt === 0) {
      [C, R] = (line.split(' ').map((el) => parseInt(el)));
      map.push('.'.repeat(R + 2));
    } else {
      map.push(`.${line}.`);
    }
    lineCnt++;
    if (lineCnt === C + 1) {
      map.push('.'.repeat(R + 2));
      rl.close();
    }
  }).on('close', function(){
    solution();
    process.exit();
  });
};

const solution = () => {
  const check = [];
  for (let i = 1; i <= C; i++) {
    for (let j = 1; j <= R; j++) {
      if (map[i][j] === 'X' && willBeSea(i, j)) {
        check.push({i, j});
      }
    }
  }
  check.forEach((land) => {
    map[land.i] = map[land.i].replaceAt(land.j, '.');
  });
  printMap();
};

const printMap = () => {
  const frame = '.'.repeat(R + 2);
  const vFrame = '.'.repeat(C + 2);
  let up, down, left, right;
  for (let i = 0; i <= C + 1; i++) {
    if (map[i] !== frame) {
      up = i;
      break;
    }
  }
  for (let i = C + 1; i >= 0; i--) {
    if (map[i] !== frame) {
      down = i;
      break;
    }
  }
  for (let i = 0; i <= R + 1; i++) {
    const vLine = map.reduce((pre, val) => {
      return pre + val[i];
    }, '');
    if (vLine !== vFrame) {
      left = i;
      break;
    }
  }
  for (let i = R + 1; i >= 0; i--) {
    const vLine = map.reduce((pre, val) => {
      return pre + val[i];
    }, '');
    if (vLine !== vFrame) {
      right = i;
      break;
    }
  }
  map.forEach((line, idx) => {
    if (idx >= up && idx <= down) {
      console.log(line.slice(left, right + 1));
    }
  });
};

const willBeSea = (i, j) => {
  let cnt = 0;
  if (map[i - 1][j] === '.') {
    cnt++;
  }
  if (map[i + 1][j] === '.') {
    cnt++;
  }
  if (map[i][j - 1] === '.') {
    cnt++;
  }
  if (map[i][j + 1] === '.') {
    cnt++;
  }
  if (cnt >= 3) {
    return true;
  }
  return false;
};

main();

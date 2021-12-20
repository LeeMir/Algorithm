// https://www.acmicpc.net/problem/18870

const fs = require('fs');

const example = `6
1000 999 1000 999 1000 999`;

const main = () => {
  const [T, input] = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString().trim()
    : example
  ).split('\n');
  const list = input.split(' ').map((elem => parseInt(elem, 10)));
  solution(list);
};

const solution = (list) => {
  const sortingList = [...new Set([...list].sort((a, b) => a - b))].reduce((pre, cur, idx) => {
    pre[cur] = idx;
    return pre;
  }, {});
  const result = list.reduce((pre, cur) => {
    if (pre === '') {
      pre = sortingList[cur];
    } else {
      pre = `${pre} ${sortingList[cur]}`;
    }
    return pre;
  }, '');
  console.log(result);
};

main();

// https://www.acmicpc.net/problem/1043

const fs = require('fs');

const example = `8 5
3 1 2 7
2 3 4
1 5
2 5 6
2 6 8
1 8`;

const main = () => {
  const [config, prophet, ...input] = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString().trim()
    : example
  ).split('\n');

  const [N, M] = config.split(' ').map((elem => parseInt(elem, 10)));
  const prophetNumber = prophet.split(' ').map((elem => parseInt(elem, 10)));

  const info = input.map((line) => {
    const arr = line.split(' ').map((elem => parseInt(elem, 10)));
    arr.shift();
    return arr;
  });

  console.log(solution(N, M, prophetNumber, info));
};

let parent = Array(51).fill(0).map((_, idx) => idx);

const find = (who) => {
  if (parent[who] === who) return who;
  return find(parent[who]);
};

const union = (a, b) => {
  const pA = find(a);
  const pB = find(b);

  parent[pA] = pB;
};

const solution = (N, M, prophet, info) => {
  let answer = M;

  if (prophet[0] === 0) {
    return M;
  } else {
    prophet.shift();
  }

  info.forEach((party) => {
    party.reduce((pre, cur, idx) => {
      if (idx !== 0) {
        union(pre, cur);
      }
      return cur;
    }, 0);
  });

  parent = parent.map((elem) => find(elem));

  const prophetParent = new Set(prophet.map(elem => parent[elem]));

  info.forEach((party) => {
    for (let i = 0; i < party.length; i++) {
      const participant = party[i];
      if (prophetParent.has(find(participant))) {
        answer--;
        break;
      }
    }
  });

  return answer;
};

main();

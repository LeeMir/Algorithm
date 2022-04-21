// https://www.acmicpc.net/problem/1865

const fs = require('fs');

const example = `2
3 3 1
1 2 2
1 3 4
2 3 1
3 1 3
3 2 1
1 2 3
2 3 4
3 1 8`;

const INF = 999999999;
const MAX = 510;

const main = () => {
  const [TC, ...input] = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString().trim()
    : example
  ).split('\n');
  
  let i = 0;
  for (let tc = 0; tc < TC; tc++) {
    const [N, M, W] = input[i].split(' ').map(elem => parseInt(elem));
    const roads = [];
    const wormholes = [];

    i++;

    for (let j = 0; j < M; j++) {
      const [S, E, T] = input[i + j].split(' ').map(elem => parseInt(elem));
      roads.push([S, E, T]);
      roads.push([E, S, T]);
    }

    i += M;

    for (let j = 0; j < W; j++) {
      const [S, E, T] = input[i + j].split(' ').map(elem => parseInt(elem));
      wormholes.push([S, E, -T]);
    }

    i += W;

    console.log(solution(N, M, W, roads, wormholes));
  }
};

const solution = (N, M, W, roads, wormholes) => {
  const Dist = Array(MAX).fill(INF);
  const Edge = [...roads, ...wormholes];
  const SIZE = Edge.length;
  Dist[1] = 0;
  for (let i = 1; i < N; i++) {
    for (let j = 0; j < SIZE; j++) {
      const [from, to, cost] = Edge[j];

      if (Dist[to] > Dist[from] + cost) {
        Dist[to] = Dist[from] + cost;
      }
    }
  }

  for (let i = 0; i < SIZE; i++) {
    const [from, to, cost] = Edge[i];

    if (Dist[to] > Dist[from] + cost) {
      return 'YES';
    }
  }
  return 'NO';
};

main();

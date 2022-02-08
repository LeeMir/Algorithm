// https://programmers.co.kr/learn/courses/30/lessons/76503

let graph;
let size;
let temp;
let answer = 0n;

const solution = (a, edges) => {
  size = a.length;
  temp = a.map(elem => BigInt(elem));
  graph = Array.from(Array(size), () => new Array());
      
  for (let i = 0; i < edges.length; i++) {
    const start = edges[i][0];
    const end = edges[i][1];
    graph[start].push(end);
    graph[end].push(start);
  }

  solve();
      
  return temp[0] ? -1 : answer;
};

const solve = () => {
  const stack = [ [0, 0] ];
  const visit = new Array(size).fill(false);
      
  while(stack.length > 0) {
    const [now, parent] = stack.pop();
    
    if (visit[now]) {
      temp[parent] += temp[now];
      answer += bigAbs(temp[now]);
      continue;
    }
    
    stack.push([now, parent]);
    visit[now] = true;
    
    graph[now].forEach(next => {
      if (!visit[next]) {
        stack.push([next, now]);
      }
    });
  }
};

const bigAbs = (bigint) => bigint > 0n ? bigint : bigint * (-1n);

/*

const dfs = (now, parent) => {
  for (let i = 0; i < graph[now].length; i++) {
    if (graph[now][i] !== parent) {
      dfs(graph[now][i], now);
    }
  }
  temp[parent] += temp[now];
  answer += bigAbs(temp[now]);
};

*/

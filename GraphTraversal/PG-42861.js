// https://programmers.co.kr/learn/courses/30/lessons/42861

let parents = [];

const getParent = (node) => {
  if (parents[node] === node) {
    return node;
  }
  return parents[node] = getParent(parents[node]);
};

const init = () => {
  parents = new Array(101).fill(0).map((cur, idx) => idx);
};

const solution = (n, costs) => {
  let answer = 0;
  init();
  costs.sort((a, b) => a[2] - b[2]);
  costs.forEach(data => {
    const start = getParent(data[0]);
    const end = getParent(data[1]);
    const cost = data[2];
    
    if (start !== end) {
      answer += cost;
      parents[end] = start;
    }
  });
  return answer;
};

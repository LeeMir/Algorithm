// https://programmers.co.kr/learn/courses/30/lessons/12946

const answer = [];

const solution = (n) => {
  hanoi(n, 1, 2, 3);
  return answer;
};

const hanoi = (n, from, by, to) => {
  if (n === 1) {
    answer.push([from, to]);
  } else {
    hanoi(n - 1, from, to, by);
    answer.push([from, to]);
    hanoi(n - 1, by, from ,to);
  }
};

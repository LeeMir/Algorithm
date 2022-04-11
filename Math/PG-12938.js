// https://programmers.co.kr/learn/courses/30/lessons/12938

const FAIL = [-1];

const solution = (n, s) => {
  const base = Math.floor(s / n);
  const rest = s % n;
  if (base === 0) return FAIL;

  const answer = new Array(n).fill(base);
  for (let i = n - rest; i < n; i++) {
    answer[i]++;
  }

  return answer;
}

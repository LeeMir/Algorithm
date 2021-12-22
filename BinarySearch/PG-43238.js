// https://programmers.co.kr/learn/courses/30/lessons/43238

const solution = (n, times) => {
  let start = BigInt(1);
  let end = BigInt(10 ** 18);
  let answer = end;
  while(start <= end) {
      let mid = (start + end) / BigInt(2);
      if (isPossible(BigInt(n), mid, times)) {
          answer = Math.min(Number(mid), Number(answer));
          end = mid - BigInt(1);
      } else {
          start = mid + BigInt(1);
      }
  }
  return answer;
};

const isPossible = (n, time, times) => (n <= calPeople(time, times));

const calPeople = (time, times) => times.reduce((pre, cur) => {
  pre += time / BigInt(cur);
  return pre;
}, BigInt(0));

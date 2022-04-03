// https://programmers.co.kr/learn/courses/30/lessons/12927
// 정석은 우선순위큐이나, JS는 직접 구현해야 한다.

const solution = (n, works) => {
  const sortedWorks = works.sort((a, b) => b - a);
  const SIZE = works.length;
  while (n > 0) {
    const max = sortedWorks[0];
    if (max === 0) {
      break;
    }
    
    for (let i = 0; i < SIZE; i++) {
      if (sortedWorks[i] >= max) {
        sortedWorks[i]--;
        n--;
      } else {
        break;
      }

      if (n === 0) {
        break;
      }
    }
  }
  
  const answer = sortedWorks.reduce((pre, cur) => pre + (cur * cur), 0);
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12900

const solution = (n) => {

  if (n === 1) return 1;
  if (n === 2) return 2;
  
  let answer;
  let cache1 = 1;
  let cache2 = 2;
  
  for (let i = 3; i <= n; i++) {
    answer = (cache1 + cache2) % 1000000007;
    cache1 = cache2;
    cache2 = answer;
  }
  
  return answer;
}

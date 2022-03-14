// https://programmers.co.kr/learn/courses/30/lessons/12904

const solution = (s) => {
  let answer = 1;
  const SIZE = s.length;
  const cache = Array.from(Array(SIZE), () => new Array(SIZE).fill(false));
  
  for (let i = 0; i < SIZE; i++) {
    cache[i][i] = true;
  }
  
  for (let i = 0; i < SIZE - 1; i++) {
    if (s[i] === s[i + 1]) {
      cache[i][i + 1] = true;
    }
  }
  
  for (let i = 3; i <= SIZE; i++) {
    for (let j = 0; j <= SIZE - i; j++) {
      if (s[j] === s[j + i - 1] && cache[j + 1][j + i - 2] === true) {
        cache[j][j + i - 1] = true;
        answer = i;
      }
    }
  }
  
  return answer;
}

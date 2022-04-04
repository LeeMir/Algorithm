// https://programmers.co.kr/learn/courses/30/lessons/68646

const solution = (a) => {
  const SIZE = a.length;
  if (SIZE <= 2) return SIZE;
  
  let answer = 2;
  const leftMin = [a[0]];
  const rightMin = [];

  let temp = 1000000001;
  
  for (let i = 1; i < SIZE; i++) {
    if (temp > a[i - 1]) {
      temp = a[i - 1];
    }
    leftMin[i] = temp;
  }
  
  rightMin[SIZE - 1] = a[SIZE - 1];
  temp = 1000000001;
  
  for (let i = SIZE - 2; i >= 0; i--) {
    if (temp > a[i + 1]) {
      temp = a[i + 1];
    }
    rightMin[i] = temp;
  }
  
  for (let i = 1; i < SIZE - 1; i++) {
    if (a[i] < leftMin[i] || a[i] < rightMin[i]) {
      answer++;
    }
  }
  
  return answer;
}

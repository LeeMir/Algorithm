// https://programmers.co.kr/learn/courses/30/lessons/12987

const solution = (A, B) => {
  let answer = 0;
  
  const N = A.length;
  const sortedA = A.sort((a, b) => b - a);
  const sortedB = B.sort((a, b) => b - a);
  let ptr = N - 1;
  for (let i = N - 1; i >= 0; i--) {
    const workerB = sortedB[i];
    for (let j = ptr; j >= 0; j--) {
      const workerA = sortedA[j];
      if (workerB > workerA) {
        answer++;
        ptr = j - 1;
        break;
      }
    }
  }
  
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/42895

const solution = (N, number) => {
    
  if (N === number) return 1;
  
  const answer = -1;
  const arr = new Array(8).fill([]);
  
  arr[1] = [N];
  for (let i = 2; i <= 8; i++) {
    const setArr = new Set();
    setArr.add(NN(N, i));
    
    for (let j = 1; j < i; j++) {
      [...arr[j]].forEach((A) => {
        arr[i - j].forEach((B) => {
          setArr.add(A + B);
          setArr.add(A - B);
          setArr.add(A * B);
          if (B !== 0) {
            setArr.add(Math.floor(A / B));
          }
        });
      });
    }
    if (setArr.has(number)) {
      return i;
    } else {
      arr[i] = [...setArr];
    }
  }
  return answer;
};

const NN = (N, num) => [...new Array(num)].reduce((pre) => {
  pre = pre * 10 + N;
  return pre;
}, 0);

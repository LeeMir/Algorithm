// https://programmers.co.kr/learn/courses/30/lessons/77886

const solution = (s) => {
  answer = s.map((str) => {
    let cnt = 0;
    const stack = [];
    
    for (let i = 0; i < str.length; i++) {
      const third = str[i];
      if (stack.length > 1) {
        const second = stack.pop();
        const first = stack.pop();
        if (first + second + third === '110') {
          cnt++;
        } else {
          stack.push(first, second, third);
        }
      } else {
        stack.push(third);
      }
    }
    
    let temp = stack.join('');
    
    for (let i = temp.length - 1; i >= 0; i--) {
      if (temp[i] === '0') {
        temp = temp.slice(0, i + 1) + '110'.repeat(cnt) + temp.slice(i + 1);
        cnt = 0;
        break;
      }
    }

    for (; cnt > 0; cnt--) {
      temp = '110' + temp;
    }
    return temp;
  });
  return answer;
};
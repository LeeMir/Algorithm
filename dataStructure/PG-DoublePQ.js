// https://programmers.co.kr/learn/courses/30/lessons/42628

const solution = (operations) => {
  const arr = [];
  operations.forEach((inst) => {
    const instArr = inst.split(' ');
    const [operator, operand] = instArr;
    switch (operator) {
      case 'I':
        arr.push(parseInt(operand));
        arr.sort((a, b) => a - b);
        break;
      case 'D':
        if (arr.length > 0) {
          if (operand === '-1') {
            arr.shift();
          } else if (operand === '1') {
            arr.pop();
          }
        }
        break;
      default:
        break;
    }
  });
  if (arr.length === 0) {
    return [0, 0];
  } else {
    return [arr[arr.length - 1], arr[0]];
  }
};

// ?? 이게 왜 됨

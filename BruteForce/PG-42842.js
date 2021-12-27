// https://programmers.co.kr/learn/courses/30/lessons/42842

const solution = (brown, yellow) => {
  const yellowPair = locateYellow(yellow);
  for(let i = 0; i < yellowPair.length; i++) {
    const pair = yellowPair[i];
    if (locateBrown(pair) === brown) {
      return [pair[0] + 2, pair[1] + 2];
    }
  }
  return 0;
};

const locateYellow = (yellow) => {
  let list = [];
  for(let i = 1; i <= Math.floor(Math.sqrt(yellow)); i++) {
    if (yellow % i === 0) {
      list = [...list, [yellow / i, i]]; // list.push(...);
    }
  }
  return list;
};

const locateBrown = (pair) => {
  return (pair[0] * 2 + pair[1] * 2) + 4;
};

// https://programmers.co.kr/learn/courses/30/lessons/42578

const solution = (clothes) => {
  const clothesObj = clothes.reduce((pre, cur) => {
    if (!pre[cur[1]]) {
      pre[cur[1]] = [cur[0]];
    } else {
      pre[cur[1]] = [...pre[cur[1]], cur[0]];
    }
    return pre;
  }, {});
  const answer = Object.keys(clothesObj).reduce((pre, cur) => {
    pre *= (clothesObj[cur].length + 1);
    return pre;
  }, 1) - 1;
  return answer;
}

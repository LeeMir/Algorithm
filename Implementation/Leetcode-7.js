// https://leetcode.com/problems/reverse-integer

/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
  if (x > 2147483647 || x < -2147483647) return 0;
  
  let str = `${x}`.split('').reverse().join('');
  answer = 0;
  if (x < 0) {
    str = str.slice(0, -1);
    answer = Number(str) * -1;
  } else {
    answer = Number(str);
  }
  
  if (answer > 2147483647 || answer < -2147483647) return 0;
  return answer;
};

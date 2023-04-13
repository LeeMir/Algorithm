// https://leetcode.com/problems/valid-number

const isNumber = (s: string): boolean => {
  let exp = false,
    sign = false,
    num = false,
    dec = false;

  const isNum = (c: string) => c >= '0' && c <= '9';
  const isExp = (c: string) => c === 'e' || c === 'E';
  const isSign = (c: string) => c === '+' || c === '-';
  const isDot = (c: string) => c === '.';

  for (let c of s) {
    if (isNum(c)) {
      // 숫자
      num = true;
    } else if (isExp(c)) {
      // e
      if (exp || !num) return false;
      else (exp = true), (sign = false), (num = false), (dec = false);
    } else if (isSign(c)) {
      // 부호
      if (sign || num || dec) return false;
      else sign = true;
    } else if (isDot(c)) {
      // 소수부
      if (dec || exp) return false;
      else dec = true;
    } else return false;
  }
  return num;
  // return s.indexOf('Infinity') === -1 && !isNaN(+s);
};

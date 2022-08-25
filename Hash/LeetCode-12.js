// https://leetcode.com/problems/integer-to-roman

const dic = {
  1000: {
    1: 'M',
  },
  100: {
    1: 'C',
    4: 'CD',
    5: 'D',
    9: 'CM',
  },
  10: {
    1: 'X',
    4: 'XL',
    5: 'L',
    9: 'XC',
  },
  1: {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX'
  },
}

const digitDic = [1, 10, 100, 1000];

const intToRoman = (num) => {
  let ans = '';
  let tmp = num;
  for (let i = 0; i < 4; i++) {
    const n = tmp % 10;
    const dgt = digitDic[i];
    tmp = Math.floor(tmp / 10);
    
    if (n === 0) {
      continue;
    }
    if (dic[dgt][n]) {
      ans = `${dic[dgt][n]}${ans}`;
      continue;
    }
    if (n > 5) {
      ans = `${dic[dgt][5]}${dic[dgt][1].repeat(n - 5)}${ans}`;
      continue;
    }
    ans = `${dic[dgt][1].repeat(n)}${ans}`;
  }
  return ans;
};
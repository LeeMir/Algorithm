// https://leetcode.com/problems/multiply-strings

const multiply = (num1: string, num2: string): string => {
  const size1 = num1.length, size2 = num2.length;
  const cache = new Array(size1 + size2).fill(0);

  if (num1 === '0' || num2 === '0') {
    return '0';
  }

  for (let i = size1 - 1; i >= 0; i--) {
    for (let j = size2 - 1; j >= 0; j--) {
      const product = Number(num1[i]) * Number(num2[j]) + cache[i + j + 1];
      const carry = Math.floor(product / 10);
      cache[i + j + 1] = product - (carry * 10);
      cache[i + j] += carry;
    }
  }

  const idx = Math.max(0, cache.findIndex((ch) => ch !== 0));
  
  return cache.slice(idx).join('');
};

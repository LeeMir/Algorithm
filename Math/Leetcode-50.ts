// https://leetcode.com/problems/powx-n

// return x ** n;
// return Math.pow(x, n);

const myPow = (x: number, n: number): number => {
  if (n === 0) {
    return 1;
  }
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  if (n % 2 === 0) {
    return myPow(x * x, n / 2);
  }
  return myPow(x * x, Math.trunc(n / 2)) * x;
};

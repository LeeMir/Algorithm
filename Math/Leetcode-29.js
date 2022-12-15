// https://leetcode.com/problems/divide-two-integers

const OVERFLOW = Math.pow(2, 31) - 1;
const UNDERFLOW = (-1) * Math.pow(2, 31);

const filter = (num) => {
  if (num <= UNDERFLOW) {
    return UNDERFLOW;
  }
  if (num >= OVERFLOW) {
    return OVERFLOW;
  }
  return num;
}

const divide = (dividend, divisor) =>
  filter(Math.trunc(dividend / divisor));

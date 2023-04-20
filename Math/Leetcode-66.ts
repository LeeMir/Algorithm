// https://leetcode.com/problems/plus-one/

const plusOne = (digits: number[]): number[] => {
  const size = digits.length;
  const ptr = size - 1;

  const addOne = (ptr: number) => {
    if (ptr === -1) {
      return [1, ...digits];
    }

    if (digits[ptr] === 9) {
      digits[ptr] = 0;
      return addOne(ptr - 1);
    }

    digits[ptr] += 1;
    return digits;
  };

  return addOne(ptr);
};

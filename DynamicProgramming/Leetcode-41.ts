// https://leetcode.com/problems/first-missing-positive

const firstMissingPositive = (nums: number[]): number => {
  const size = nums.length;
  const cache: boolean[] = new Array(size + 1).fill(false); // size 최대가 한정되어 있는데 이걸 constant memory라고 할 수 있을까?
  cache[0] = true;

  let num: number;
  for (let i = 0; i < size; i++) {
    num = nums[i];

    if (num <= 0) {
      continue;
    }

    if (num < size + 1) {
      cache[num] = true;
    }
  }

  const ans = cache.findIndex((flag => !flag));

  if (ans === -1) {
    return size + 1;
  }

  return ans;
};

// https://leetcode.com/problems/maximum-subarray

const maxSubArray = (nums: number[]): number => {
  const conquerMax = (l: number, mid: number, r: number) => {
    let tmp = 0,
      maxL = -10000,
      maxR = -10000;
    for (let i = mid; i >= l; i--) {
      tmp += nums[i];
      maxL = Math.max(tmp, maxL);
    }

    tmp = 0;

    for (let i = mid + 1; i <= r; i++) {
      tmp += nums[i];
      maxR = Math.max(tmp, maxR);
    }

    return maxL + maxR;
  };

  const devNCon = (l: number, r: number) => {
    if (l === r) {
      return nums[l];
    }

    const mid = ~~((l + r) / 2);

    const maxL = devNCon(l, mid);
    const maxR = devNCon(mid + 1, r);
    const maxC = conquerMax(l, mid, r);

    return Math.max(maxL, maxR, maxC);
  };

  return devNCon(0, nums.length - 1);
};

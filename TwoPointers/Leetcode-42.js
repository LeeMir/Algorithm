// https://leetcode.com/problems/trapping-rain-water

/**
 * @param {number[]} height
 * @return {number}
 */
const trap = (height) => {
  const size = height.length;
  let water = 0;

  let lPtr = 0, rPtr = size - 1;
  let lMax = height[lPtr], rMax = height[rPtr];

  while (lPtr < rPtr) {
    lMax = Math.max(lMax, height[lPtr]);
    rMax = Math.max(rMax, height[rPtr]);

    if (lMax <= rMax) {
      water += lMax - height[lPtr++];
    } else {
      water += rMax - height[rPtr--];
    }
  }

  return water;
};

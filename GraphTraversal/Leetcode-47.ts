// https://leetcode.com/problems/permutations-ii

const permuteUnique = (nums: number[]): number[][] => {
  const size = nums.length;
  const ans: number[][] = [];

  const recursive = (
    visitCnt: { [key: number]: number },
    arr: number[],
    res: number[][]
  ) => {
    if (arr.length === size) {
      res.push([...arr]);
      return;
    }

    for (const key in visitCnt) {
      const num = Number(key);
      if (visitCnt[num] === 0) {
        continue;
      }

      arr.push(num);
      visitCnt[num] -= 1;
      recursive(visitCnt, arr, res);
      arr.pop();
      visitCnt[num] += 1;
    }
  };

  const visitCnt = nums.reduce((pre, cur) => {
    const next = { ...pre };
    if (!next[cur]) {
      next[cur] = 0;
    }

    next[cur] += 1;
    return next;
  }, {});

  recursive(visitCnt, [], ans);
  return ans;
};

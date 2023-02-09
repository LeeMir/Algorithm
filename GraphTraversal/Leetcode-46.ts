// https://leetcode.com/problems/permutations

const permute = (nums: number[]): number[][] => {
  const size = nums.length;
  const ans: number[][] = [];
  const recursive = (visited: boolean[], arr: number[], res: number[][]) => {
    if (arr.length === size) {
      res.push([...arr]);
      return;
    }

    for (let i = 0; i < size; i++) {
      if (visited[i]) {
        continue;
      }

      arr.push(nums[i]);
      visited[i] = true;
      recursive(visited, arr, res);
      arr.pop();
      visited[i] = false;
    }
  };

  recursive(Array(size).fill(false), [], ans);
  return ans;
};

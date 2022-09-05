// https://leetcode.com/problems/combination-sum/

const dfs = (result, candidates, party, rem, ptr) => {
  if (rem === 0) {
      result.push(party);
      return;
  }
  if (ptr < 0) {
      return;
  }
  const candidate = candidates[ptr];
  if (rem >= candidate) {
      dfs(result, candidates, [...party, candidate], rem - candidate, ptr);
  }
  if (ptr > 0) {
      dfs(result, candidates, party, rem, ptr - 1);
  }
};

const combinationSum = (candidates, target) => {
  const res = [];
  dfs(res, candidates, [], target, candidates.length - 1);
  return res;
};

// https://leetcode.com/problems/combination-sum-ii

const combinationSum2 = (candidates: number[], target: number): number[][] => {
  const ans: number[][] = [];
  const size = candidates.length;
  const sum = candidates.reduce((pre, cur) => pre + cur, 0);

  if (sum < target) {
    return [];
  }

  if (sum === size) {
    return [new Array(target).fill(1)];
  }

  if (sum === target) {
    return [candidates];
  }
  
  const sortedCandi = [...candidates].sort((a, b) => a - b);

  const dfs = (party: number[], rem: number, ptr: number) => {
    if(rem < 0) return;
    if(rem === 0) {
      ans.push(party);
      return;
    }
      
    for(let i = ptr; i < size; i++){
      const candi = sortedCandi[i];
      if(i > ptr && candi === sortedCandi[i - 1]) continue;
      dfs([...party, candi], rem - candi, i + 1);
    }
  }
  
  dfs([], target, 0);

  return ans;
};

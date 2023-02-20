// https://leetcode.com/problems/group-anagrams

const groupAnagrams = (strs: string[]): string[][] => {
  const size = strs.length;
  const hash = {};

  for (let i = 0; i < size; i++) {
    const key = [...strs[i]].sort().toString();
    if (!hash[key]) {
      hash[key] = [];
    }
    hash[key].push(strs[i]);
  }

  return Object.values(hash);
};

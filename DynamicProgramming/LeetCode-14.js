// https://leetcode.com/problems/longest-common-prefix

const longestCommonPrefix = (strs) => {
  const stdStr = strs[0];
  let ans = '';
  for (let i = 0; i < stdStr.length; i++) {
    if (strs.every(str => str[i] === stdStr[i])) {
        ans += stdStr[i];
      } else {
        break;
      }
    }
  return ans;
};

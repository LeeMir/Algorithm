// https://leetcode.com/problems/generate-parentheses

const dfs = (result, str, open, close, n) => {
  if (open + close === 2 * n) {
    result.push(str);
    return;
  }
  if (open < n) {
    dfs(result, str + '(', open + 1, close, n);
  }
  if (close < n && close < open) {
    dfs(result, str + ')', open, close + 1, n);
  }
};

const generateParenthesis = (n) => {
  const res = [];
  dfs(res, '(', 1, 0, n);
  return res;
};

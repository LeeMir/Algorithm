// https://leetcode.com/problems/longest-valid-parentheses

/**
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = (s) => {
  const stack = [-1];
  let max = 0;
  
  for (const idx in s) {
    const ch = s[idx];
    if (ch === '(') {
      stack.push(idx);
    }
    
    if (ch === ')') {
      stack.pop();

      if (stack.length === 0) {
        stack.push(idx);
      } else {
        const length = idx - stack[stack.length - 1];
        max = Math.max(max, length);
      }
    }
  }
  
  return max;
};

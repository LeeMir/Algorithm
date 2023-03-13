// https://leetcode.com/problems/length-of-last-word

const lengthOfLastWord = (s: string): number => {
  let lastIdx = s.length - 1;
  for (; lastIdx >= 0; lastIdx--) {
    if (s[lastIdx] !== " ") break;
  }

  let ptr = lastIdx;
  for (; ptr >= 0; ptr--) {
    if (s[ptr] === " ") break;
  }
  return lastIdx - ptr;
};

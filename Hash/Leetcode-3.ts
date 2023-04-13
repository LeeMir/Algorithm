// https://leetcode.com/problems/longest-substring-without-repeating-characters

const lengthOfLongestSubstring = (s: string): number => {
  const size = s.length;

  if (size <= 1) return size;

  const ht = new Map();
  let longest = 0,
    ptr = 0;

  for (let i = 0; i < size; i++) {
    const c = s[i];

    while (ht.has(c)) {
      ht.delete(s[ptr]);
      ptr++;
    }

    ht.set(c, i);
    longest = Math.max(longest, i - ptr + 1);
  }

  return longest;
};

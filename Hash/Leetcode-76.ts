// https://leetcode.com/problems/minimum-window-substring

function minWindow(s: string, t: string): string {
  if (t === '') return '';

  let left = 0;
  let sCount = new Map();
  let tCount = new Map();

  for (let i = 0; i < t.length; i++) {
    tCount.set(t[i], 1 + (tCount.get(t[i]) || 0));
  }

  let [tCountSize, sCountSize] = [tCount.size, 0];
  let minLength = s.length + 1;
  let resLeft = -1;
  let resRight = -1;

  for (let right = 0; right < s.length; right++) {
    let ch = s[right];

    if (tCount.has(ch)) {
      sCount.set(ch, 1 + (sCount.get(ch) || 0));
      if (sCount.get(ch) === tCount.get(ch)) {
        sCountSize = sCountSize + 1;
      }
    }

    while (tCountSize === sCountSize) {
      let curLength = right - left + 1;

      if (curLength < minLength) {
        [resLeft, resRight, minLength] = [left, right, curLength];
      }

      if (sCount.get(s[left])) {
        sCount.set(s[left], sCount.get(s[left]) - 1);
        if (sCount.get(s[left]) < tCount.get(s[left])) {
          sCountSize = sCountSize - 1;
        }
      }
      left += 1;
    }
  }
  return s.slice(resLeft, resRight + 1);
}

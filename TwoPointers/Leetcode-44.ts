// https://leetcode.com/problems/wildcard-matching

const isSame = (s: string, p: string): boolean => s === p || p === "?";

const isMatch = (s: string, p: string): boolean => {
  const sSize = s.length;
  const pSize = p.length;

  let sPtr = 0,
    pPtr = 0;
  let starPPtr = -1,
    starSPtr = -1;

  while (sPtr < sSize) {
    const sCh = s[sPtr];
    const pCh = p[pPtr];
    if (pPtr < pSize && isSame(sCh, pCh)) {
      sPtr++;
      pPtr++;
    } else if (pCh === "*") {
      starPPtr = pPtr;
      starSPtr = sPtr;
      pPtr++;
    } else if (starPPtr === -1) {
      return false;
    } else {
      starSPtr++;
      sPtr = starSPtr;
      pPtr = starPPtr + 1;
    }
  }

  for (let i = pPtr; i < pSize; i++) {
    if (p[i] !== "*") {
      return false;
    }
  }

  return true;
};

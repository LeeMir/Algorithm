// https://leetcode.com/problems/regular-expression-matching

const diffCh = (a, b) => a === b || b === '.';

const isMatch = (s, p) => {
  const sSize = s.length;
  const pSize = p.length;
  
  s = ' ' + s;
  p = ' ' + p;
  
  const dp = Array.from(Array(sSize + 1), () => Array(pSize + 1).fill(false));
  dp[0][0] = true;
  
  for (let i = 0; i <= sSize; i++) {
    for (let j = 1; j <= pSize; j++) {
      if (j + 1 <= pSize && p[j + 1] === '*') continue; // 다음 글자가 *면 일단 continue
      if (p[j] == '*') { // STAR일 경우
        dp[i][j] = dp[i][j - 2] || (i !== 0 && dp[i - 1][j] && diffCh(s[i], p[j - 1]));
        // 이번 *는 건너뛰거나 *글자를 계속 매칭
      }
      if (p[j] !== '*' && i !== 0) { // EXACT일 경우
        dp[i][j] = dp[i - 1][j - 1] && diffCh(s[i], p[j]);
        // 이전 글자까지 매칭 성공했으면서 이번 글자끼리 매칭
      }
    }
  }
  
  return dp[sSize][pSize];
};

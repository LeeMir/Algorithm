// https://programmers.co.kr/learn/courses/30/lessons/12971

const solution = (sticker) => {
  if (sticker.length === 1) return sticker[0];
  
  const dp0 = [sticker[0], sticker[0]];
  const dpNot0 = [0, sticker[1]];
  
  for (let i = 2; i < sticker.length; i++) {
    dp0[i] = Math.max(dp0[i - 2] + sticker[i], dp0[i - 1]);
    dpNot0[i] = Math.max(dpNot0[i - 2] + sticker[i], dpNot0[i - 1]);
  }
  
  const answer = Math.max(dp0[sticker.length - 2], dpNot0[sticker.length - 1]);

  return answer;
}

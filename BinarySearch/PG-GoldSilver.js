// https://programmers.co.kr/learn/courses/30/lessons/86053?language=javascript

const solution = (a, b, g, s, w, t) => {
  let answer = -1;
  let start = 0;
  let end = 4 * (10 ** 14) - (10 ** 5);
  answer = end;
  while(start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (isOkay(a, b, g, s, w, t, mid)) {
          answer = Math.min(mid, answer);
          end = mid - 1;
      } else {
          start = mid + 1;
      }
  }
  return answer;
}

const isOkay = (a, b, g, s, w, t, time) => {
  const cityCnt = g.length;
  let totalGold = 0;
  let totalSilver = 0;
  let totalMineral = 0;
  for (let i = 0; i < cityCnt; i++) {
      const roundTripTime = t[i] * 2;
      const oneMore = (time % roundTripTime >= t[i]) ? 1 : 0;
      const roundTripTotalCnt = Math.floor(time / roundTripTime) + oneMore;
      const maxWeight = roundTripTotalCnt * w[i];
      
      totalGold += Math.min(g[i], maxWeight);
      totalSilver += Math.min(s[i], maxWeight);
      totalMineral += Math.min(g[i] + s[i], maxWeight);
  }
  if (totalGold >= a && totalSilver >= b && totalMineral >= a + b) {
      return true;
  }
  return false;
}

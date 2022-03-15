// https://programmers.co.kr/learn/courses/30/lessons/87391

const LEFT = 0;
const RIGHT = 1;
const UP = 2;
const DOWN = 3;

const min = (a, b) => a > b ? b : a;
const max = (a, b) => a > b ? a : b;

const solution = (n, m, x, y, queries) => {
  let r1 = BigInt(x);
  let r2 = BigInt(x);
  let c1 = BigInt(y);
  let c2 = BigInt(y);
  for (let i = queries.length - 1; i >= 0; i--) {
    const [command, dx] = queries[i];
    const bdx = BigInt(dx);
    switch (command) {
      case LEFT:
        if (c1 !== 0n) c1 += bdx;
        c2 = min(c2 + bdx, BigInt(m - 1));
        if (c1 > m) return 0;
        break;
      case RIGHT:
        if (c2 !== BigInt(m - 1)) c2 -= bdx;
        c1 = max(c1 - bdx, 0n);
        if (c2 < 0n) return 0;
        break;
      case UP:
        if (r1 !== 0n) r1 += bdx;
        r2 = min(r2 + bdx, BigInt(n - 1));
        if (r1 > n) return 0;
        break;
      case DOWN:
        if (r2 !== BigInt(n - 1)) r2 -= bdx;
        r1 = max(r1 - bdx, 0n);
        if (r2 < 0n) return 0;
        break;
      default:
        break;
    }
  }

  const mr = r2 - r1 + 1n;
  const mc = c2 - c1 + 1n;

  return mr * mc;
}

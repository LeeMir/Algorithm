// https://programmers.co.kr/learn/courses/30/lessons/43163

const solution = (begin, target, words) => {
  if (words.indexOf(target) === -1) {
    return 0;
  }
  return bfs(begin, target, words);
};

const bfs = (begin, target, words) => {
  const q = [];
  const check = Array(words.length).fill(false);

  for (let i = 0; i < words.length; i++) {
    if (!check[i] && isStrDiffOne(begin, words[i])) {
      q.push({ idx: i, cnt: 1 });
    }
  }

  while(q.length > 0) {
    const elem = q.shift();
    const origin = words[elem.idx];
    check[elem.idx] = true;

    if (origin === target) {
      return elem.cnt;
    }

    for (let i = 0; i < words.length; i++) {
      if (!check[i] && isStrDiffOne(origin, words[i])) {
        q.push({ idx: i, cnt: elem.cnt + 1 });
      }
    }
  }

  return 0;
};

const isStrDiffOne = (word1, word2) => {
  let cnt = 0;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) {
      cnt++;
    }
    if (cnt === 2) {
      return false;
    }
  }
  return true;
};

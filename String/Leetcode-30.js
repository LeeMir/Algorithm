// https://leetcode.com/problems/substring-with-concatenation-of-all-words

const findSubstring = (s, words) => {
  const result = [];
  const pattern = {};
  const wordSize = words[0].length;
  const strSize = s.length;

  // 각 단어가 몇 개인지 세기
  for (const word of words) {
    pattern[word] = (pattern[word] || 0) + 1;
  }

  // 슬라이딩 윈도우
  for (let i = 0; i < wordSize; i++) {
    let front = i;
    let back = front + wordSize;
    let count = 0;

    let matches = {};

    while (back <= strSize) {
      // 뒤를 기준으로 단어 끊기
      let word = s.slice(back - wordSize, back);

      // 패턴에 있는 단어면
      if (pattern[word]) {
        matches[word] = (matches[word] ?? 0) + 1;
        count++;

        // 중복 시
        while (matches[word] > pattern[word]) {
          matches[s.slice(front, front + wordSize)] -= 1;
          front += wordSize;
          count--;
        }

        // 모든 단어가 등장했으면
        if (count === words.length) {
          result.push(front);
        }

      } else {
        matches = {};
        count = 0;
        front = back;
      }

      back += wordSize;
    }
  }

  return result;
};

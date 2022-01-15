// https://programmers.co.kr/learn/courses/30/lessons/43165

const solution = (numbers, target) => dfs(numbers, target, numbers[0], 1) + dfs(numbers, target, -1 * numbers[0], 1);

const dfs = (numbers, target, sum, idx) => {
  if (numbers.length === idx) {
    if (sum === target) {
      return 1;
    }
    return 0;
  }
  return dfs(numbers, target, sum + numbers[idx], idx + 1) + dfs(numbers, target, sum - numbers[idx], idx + 1);
};

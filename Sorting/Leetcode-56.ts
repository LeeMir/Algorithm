// https://leetcode.com/problems/merge-intervals

const merge = (intervals: number[][]): number[][] => {
  intervals.sort((a, b) => a[0] - b[0]);
  const size = intervals.length;
  const ans = [intervals[0]] as number[][];

  for (let i = 1; i < size; i++) {
    if (intervals[i][0] <= ans[ans.length - 1][1]) {
      ans[ans.length - 1][1] = Math.max(
        intervals[i][1],
        ans[ans.length - 1][1]
      );
    } else {
      ans.push(intervals[i]);
    }
  }

  return ans;
};

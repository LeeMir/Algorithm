// https://leetcode.com/problems/largest-rectangle-in-histogram

function largestRectangleArea(heights: number[]): number {
  const size = heights.length;
  const stack = new Stack();

  let ans = 0;
  for (let i = 0; i < size; i++) {
    while (!stack.isEmpty() && heights[stack.top()] > heights[i]) {
      const height = heights[stack.pop()];
      let width = i;
      if (!stack.isEmpty()) {
        width = i - stack.top() - 1;
      }
      ans = Math.max(ans, width * height);
    }
    stack.push(i);
  }

  while (!stack.isEmpty()) {
    const height = heights[stack.pop()];
    let width = size;
    if (!stack.isEmpty()) {
      width = size - stack.top() - 1;
    }
    ans = Math.max(ans, width * height);
  }

  return ans;
}

class Stack {
  arr: number[];
  index: number;

  constructor() {
    this.arr = [];
    this.index = 0;
  }

  push(item: number) {
    this.arr[this.index++] = item;
  }

  pop() {
    if (this.index <= 0) return -1;
    const result = this.arr[--this.index];
    return result;
  }

  top() {
    return this.arr[this.index - 1] ?? 0;
  }

  isEmpty() {
    return this.index === 0;
  }
}

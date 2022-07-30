// https://leetcode.com/problems/range-sum-query-mutable

class NumArray {
  arr = [];
  sum = 0;
  size = 0;
  constructor(arr) {
    this.arr = arr;
    this.sum = arr.reduce((pre, cur) => pre + cur, 0);
    this.size = arr.length;
  }

  update(index, val) {
    this.sum = this.sum - this.arr[index] + val;
    this.arr[index] = val;
  }

  sumRange(left, right) {
    const length = right - left;
    if (length + 1 === this.size) return this.sum;
    
    let sum = 0;
    if (length < this.arr.length / 2) {
      for (let i = left; i <= right; i++)
        sum += this.arr[i];
      return sum;
    }
    
    sum = this.sum;
    
    for (let i = 0; i < left; i++)
      sum -= this.arr[i];
    for (let i = right + 1; i < this.size; i++)
      sum -= this.arr[i];
    return sum;
  }
}

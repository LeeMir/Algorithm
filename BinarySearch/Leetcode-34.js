// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array

const binarySearch = (list, target, left, right) => {
  let mid = 0;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (list[mid] === target) {
      return [left, mid, right];
    }
    
    if (list[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return [-1, -1, -1];
}

const binaryMinSearch = (list, target, left, right) => {
  let mid = 0;
  while (left <= right) {
    if (list[left] === target) {
      return left;
    }
    if (list[left] !== target && list[left + 1] === target) {
      return left + 1;
    }

    mid = Math.floor((left + right) / 2);
    
    if (list[mid] === target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

const binaryMaxSearch = (list, target, left, right) => {
  let mid = 0;
  while (left <= right) {
    if (list[right] === target) {
      return right;
    }
    if (list[right] !== target && list[right - 1] === target) {
      return right - 1;
    }

    mid = Math.floor((left + right) / 2);
    
    if (list[mid] === target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
}

const FAIL = [-1, -1];

const searchRange = (nums, target) => {
  if (nums.length === 0) {
    return FAIL;
  }

  const [left, mid, right] = binarySearch(nums, target, 0, nums.length - 1);
  if (mid === -1) {
    return FAIL;
  }

  const min = binaryMinSearch(nums, target, left, mid);
  const max = binaryMaxSearch(nums, target, mid, right);

  return [min, max];
};

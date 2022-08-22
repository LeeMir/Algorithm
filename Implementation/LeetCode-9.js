// https://leetcode.com/problems/palindrome-number/

const isPalindrome = (x) => {
  // x.toString().split('').reverse().join('') === x.toString();

  if (x < 0) return false;
  
  let tmp = x;
  let reversedX = 0;
  while(tmp > 0) {
    reversedX *= 10;
    const num = tmp % 10;
    tmp = Math.floor(tmp / 10);
    reversedX += num;
  }
  
  return reversedX === x;
}

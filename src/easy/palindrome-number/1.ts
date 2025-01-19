/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start

function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }

  let original = x;
  let reverse = 0;
  while (x > 0) {
    reverse += (x % 10) * Math.pow(10, Math.floor(Math.log10(x)));
    x = Math.floor(x / 10);
  }
  return reverse == original;
}
// @lc code=end

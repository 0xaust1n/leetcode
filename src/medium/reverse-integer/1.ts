/*
 * @lc app=leetcode id=7 lang=typescript
 *
 * [7] Reverse Integer
 */

// @lc code=start
function reverse(x: number): number {
  let isNegative = x < 0 ? -1 : 1;
  const max = Math.pow(2, 31) - 1;
  x = Math.abs(x);
  let str = '';
  while (x != 0) {
    str += (x % 10).toString();
    x = Math.floor(x / 10);
  }
  return Number(str) > max ? 0 : Number(str) * isNegative;
}
// @lc code=end

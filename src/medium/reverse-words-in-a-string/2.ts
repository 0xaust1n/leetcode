/*
 * @lc app=leetcode id=151 lang=typescript
 *
 * [151] Reverse Words in a String
 */

// @lc code=start
function reverseWords2(s: string): string {
  return s
    .split(' ')
    .filter((item) => !!item)
    .reverse()
    .join(' ');
}
// @lc code=end

// one-liner
// space complexity: O(n)
// time complexity: O(n)

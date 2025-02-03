/*
 * @lc app=leetcode id=1768 lang=typescript
 *
 * [1768] Merge Strings Alternately
 */

// @lc code=start
function mergeAlternately(word1: string, word2: string): string {
  let result = '';
  for (let index = 0; index < Math.max(word1.length, word2.length); index++) {
    if (word1[index]) {
      result += word1[index];
    }

    if (word2[index]) {
      result += word2[index];
    }
  }
  return result;
}
// @lc code=end

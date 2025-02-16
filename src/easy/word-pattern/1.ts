/*
 * @lc app=leetcode id=290 lang=typescript
 *
 * [290] Word Pattern
 */

// @lc code=start
function wordPattern(pattern: string, s: string): boolean {
  return verifyPattern(pattern) == verifyPattern(s.split(' '));
}

function verifyPattern(s: string | string[]) {
  const hashMap = new Map();
  let pionter = 1;
  let result = '';
  for (const char of s) {
    if (!hashMap.has(char)) {
      result += pionter.toString();
      hashMap.set(char, pionter);
      pionter++;
    } else {
      result += hashMap.get(char);
    }
  }

  return result;
}

// time complexity O(n)
// space complexity O(n)
// @lc code=end

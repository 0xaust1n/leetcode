/*
 * @lc app=leetcode id=1047 lang=javascript
 *
 * [1047] Remove All Adjacent Duplicates In String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  let recordAry = [];
  for (let i = 0; i <= s.length; i++) {
    if (!recordAry.length) {
      recordAry.push(s[i]);
    } else {
      recordAry[recordAry.length - 1] === s[i] ? recordAry.pop() : recordAry.push(s[i]);
    }
  }
  return recordAry.join('');
};
// @lc code=end

/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 * Approaching 1

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length == 0) {
    return 0;
  }
  let count = 0;
  let Str = [];
  for (let i = 0; i < s.length; i++) {
    if (!Str.includes(s[i])) {
      Str.push(s[i]);
      if (Str.length > count) {
        count = Str.length;
      }
    } else {
      const pionter = Str.indexOf(s[i]);
      if (pionter + 1 < Str.length) {
        Str = Str.slice(pionter + 1, Str.length);
      } else {
        Str = [];
      }
      Str.push(s[i]);
    }
  }
  return count;
};
// @lc code=end

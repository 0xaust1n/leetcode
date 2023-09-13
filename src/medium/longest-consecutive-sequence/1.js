/*
 * @lc app=leetcode id=128 lang=javascript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length == 0) return 0;
  let maxCount = 1;
  const sortSet = Array.from(new Set(nums.sort((a, b) => a - b)));
  let count = 1;

  for (let i = 1; i < sortSet.length; i++) {
    if (sortSet[i] - sortSet[i - 1] == 1) {
      count += 1;
    } else {
      count = 1;
    }
    if (maxCount < count) maxCount = count;
  }
  return maxCount;
};

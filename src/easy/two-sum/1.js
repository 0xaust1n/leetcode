/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 * Approaching 1
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const recordMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (recordMap.has(nums[i])) {
      return [recordMap.get(nums[i]), i];
    } else {
      recordMap.set(target - nums[i], i);
      continue;
    }
  }
};
// @lc code=end

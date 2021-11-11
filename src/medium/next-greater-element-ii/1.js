/*
 * @lc app=leetcode id=503 lang=javascript
 *
 * [503] Next Greater Element II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  let len = nums.length;
  let stack = [];
  let result = new Array(len).fill(-1);
  for (let i = len * 2 - 1; i >= 0; i--) {
    while (stack.length > 0 && nums[i % len] >= stack[stack.length - 1]) {
      stack.pop();
    }
    if (stack.length > 0) {
      result[i % len] = stack[stack.length - 1];
    }
    stack.push(nums[i % len]);
  }
  return result;
};
// @lc code=end

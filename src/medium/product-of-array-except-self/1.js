/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start

// solution of prefix multi and suffix multi

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let prefix = 1;
  const output = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    output[i] = prefix;
    prefix *= nums[i];
  }

  let suffix = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    suffix *= nums[i + 1];
    output[i] = output[i] * suffix;
  }

  return output;
};
// @lc code=end

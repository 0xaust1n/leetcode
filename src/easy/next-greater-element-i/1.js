/*
 * @lc app=leetcode id=496 lang=javascript
 *
 * [496] Next Greater Element I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let recordMap = new Map();
  let stack = [];
  let result = [];
  for (let i = nums2.length - 1; i >= 0; i--) {
    while (stack.length > 0 && stack[stack.length - 1] < nums2[i]) {
      stack.pop();
    }
    recordMap.set(nums2[i], stack.length > 0 ? stack[stack.length - 1] : -1);
    stack.push(nums2[i]);
  }

  nums1.forEach((e) => {
    result.push(recordMap.get(e));
  });
  return result;
};
// @lc code=end

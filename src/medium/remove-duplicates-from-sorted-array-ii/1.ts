/*
 * @lc app=leetcode id=80 lang=typescript
 *
 * [80] Remove Duplicates from Sorted Array II
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  if (nums.length <= 2) return nums.length;
  // index for pionter to current store value index
  let index = 2;
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] !== nums[index - 2]) {
      nums[index] = nums[i];
      index++;
    }
  }
  return index;
}

// @lc code=end

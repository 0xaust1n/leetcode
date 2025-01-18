/*
 * @lc app=leetcode id=26 lang=typescript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start

// two pionter solution
function removeDuplicates(nums: number[]): number {
  let index = 1;
  for (let i = 0, j = 1; j < nums.length; j++) {
    if (nums[i] != nums[j]) {
      nums[index] = nums[j];
      index++;
    }
    i = j;
  }
  nums = nums.slice(0, index);
  return nums.length;
}

// @lc code=end

/*
 * @lc app=leetcode id=27 lang=typescript
 *
 * [27] Remove Element
 */

// @lc code=start

function removeElement(nums: number[], val: number): number {
  let pionter = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[pionter] = nums[i];
      pionter++;
    }
  }
  return pionter;
}
// @lc code=end

/*
 * this question only check return value is same length with expect value lenght
 * so we can use pointer to replace the value that not equal to val
 * and return the pointer
 * leave the rest of the element to be whatever
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

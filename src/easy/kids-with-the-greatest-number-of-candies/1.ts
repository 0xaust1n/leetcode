/*
 * @lc app=leetcode id=1431 lang=typescript
 *
 * [1431] Kids With the Greatest Number of Candies
 */

// @lc code=start
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let highest = 0;
  for (const current of candies) {
    if (current > highest) {
      highest = current;
    }
  }

  return candies.map((current: number) => {
    if (current + extraCandies >= highest) {
      return true;
    } else {
      return false;
    }
  });
}
// @lc code=end

// space complexity: O(n)
// time complexity: O(n)

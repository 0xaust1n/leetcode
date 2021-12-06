/*
 * @lc app=leetcode id=1217 lang=javascript
 *
 * [1217] Minimum Cost to Move Chips to The Same Position
 */

// @lc code=start
/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
  let even = 0;
  let odd = 0;
  position.forEach((x) => {
    if (x % 2 == 0) {
      even++;
    } else {
      odd++
    }
  });
  return Math.min(even, odd);
};
// @lc code=end


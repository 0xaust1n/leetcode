/*
 * @lc app=leetcode id=1512 lang=javascript
 *
 * [1512] Number of Good Pairs
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let count = 0;
  let recordMap = new Map();
  nums.forEach((e) => {
    if (!recordMap.has(e)) {
      recordMap.set(e, 1);
    } else {
      let index = recordMap.get(e);
      count += 1 * index;
      index += 1;
      recordMap.set(e, index);
    }
  });

  return count;
};
// @lc code=end

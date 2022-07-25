/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const result = new Array(numRows); // init Array len
  for (let row = 0; row < numRows; row++) {
    result[row] = new Array(row + 1).fill(1);
    for (let i = 1; i < row; i++) {
      result[row][i] = result[row - 1][i - 1] + result[row - 1][i];
    }
  }
  return result;
};
// @lc code=end

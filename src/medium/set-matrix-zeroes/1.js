/*
 * @lc app=leetcode id=73 lang=javascript
 *
 * [73] Set Matrix Zeroes
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let dataLen = matrix.length;
  let rowLen = matrix[0].length;

  let yArray = [];
  for (let x = 0; x < dataLen; x++) {
    let isRowHasZero = false;
    for (let y = 0; y < rowLen; y++) {
      if (matrix[x][y] == 0) {
        isRowHasZero = true;
        yArray.push(y);
      }
    }
    if (isRowHasZero) {
      for (let i = 0; i < rowLen; i++) {
        matrix[x][i] = 0;
      }
    } else {
      continue;
    }
  }

  for (const y of yArray) {
    for (let i = 0; i < dataLen; i++) {
      matrix[i][y] = 0;
    }
  }
  return matrix;
};
// @lc code=end

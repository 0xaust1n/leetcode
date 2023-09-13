/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const recordSet = new Set();
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const item = board[i][j];
      if (item === '.') {
        continue;
      }
      const x = `x${j}${item}`;
      const y = `y${i}${item}`;
      const xy = `${Math.floor(i / 3)}${Math.floor(j / 3)}${item}`;
      if (recordSet.has(x)) {
        return false;
      }
      if (recordSet.has(y)) {
        return false;
      }
      if (recordSet.has(xy)) {
        return false;
      }
      recordSet.add(x);
      recordSet.add(y);
      recordSet.add(xy);
    }
  }
  return true;
};
// @lc code=end

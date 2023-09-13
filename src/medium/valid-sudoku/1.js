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
  const map = new Map();
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const item = board[i][j];
      if (item === '.') {
        continue;
      }
      const xP = `x${j}`;
      const yP = `y${i}`;
      const xyP = `${Math.floor(i / 3)}${Math.floor(j / 3)}`;
      const x = map.get(xP) || new Set();
      const y = map.get(yP) || new Set();
      const xy = map.get(xyP) || new Set();

      if (x.has(item)) {
        return false;
      }
      if (y.has(item)) {
        return false;
      }
      if (xy.has(item)) {
        return false;
      }

      x.add(item);
      y.add(item);
      xy.add(item);

      map.set(xP, x);
      map.set(yP, y);
      map.set(xyP, xy);
    }
  }
  return true;
};

// @lc code=end

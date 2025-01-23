/*
 * @lc app=leetcode id=6 lang=typescript
 *
 * [6] Zigzag Conversion
 */

// @lc code=start
function convert(s: string, numRows: number): string {
  let result = Array(numRows).fill('');
  let skipCount = 0;
  let index = 0;
  for (const string of s) {
    let row = index > numRows - 1 ? index % numRows : index;
    result[row] += string;

    if (index > 0 && row == numRows - 1) {
      skipCount++;
      index += numRows - 1;
      continue;
    }

    if (skipCount == numRows - 1 || skipCount == 0) {
      skipCount = 0;
      index += 1;
    }

    if (skipCount > 0) {
      skipCount++;
      index += numRows - 1;
      continue;
    }
  }
  return result.join('');
}

/*
 * @lc app=leetcode id=6 lang=typescript
 *
 * [6] Zigzag Conversion
 */

// @lc code=start
function convert(s: string, numRows: number): string {
  let result: string[][] = [];
  let skipCount = 0;
  let pionter = 0;
  s.split('').forEach((string) => {
    let arrayIndex = pionter > numRows - 1 ? pionter % numRows : pionter;
    result[arrayIndex] = result[arrayIndex] || [];
    result[arrayIndex].push(string);

    if (pionter > 0 && arrayIndex == numRows - 1) {
      skipCount++;
      pionter += numRows - 1;
      return;
    }

    if (skipCount == numRows - 1 || skipCount == 0) {
      skipCount = 0;
      pionter += 1;
    }

    if (skipCount > 0) {
      skipCount++;
      pionter += numRows - 1;
      return;
    }
  });
  return result.flat().join('');
}

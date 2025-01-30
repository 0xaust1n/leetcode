/*
 * @lc app=leetcode id=8 lang=typescript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
function myAtoi(s: string): number {
  // const area
  const MAX = Math.pow(2, 31) - 1;
  const MIN = -Math.pow(2, 31);

  // flag
  let isNegative: Boolean | null = null;

  // result
  let parseStr = '';

  for (let i = 0; i < s.length; i++) {
    // break if it's second whitespace
    if (parseStr.length > 0 && s[i] == ' ') {
      break;
    }

    // skip whitespace
    if (s[i] == ' ') {
      continue;
    }

    let isNum = isNaN(Number(s[i]));

    // init number when met sign - or +
    if (parseStr.length == 0 && s[i] == '-') {
      isNegative = true;
      parseStr += '0';
      continue;
    }

    if (parseStr.length == 0 && s[i] == '+') {
      isNegative = false;
      parseStr += '0';
      continue;
    }

    // break when met non-number
    if (isNum) {
      break;
    }

    if (parseStr.length == 0 && isNum) {
      continue;
    }

    parseStr += s[i];
  }

  // parse to number
  let num = isNegative ? -Number(parseStr) : Number(parseStr);

  // handle max min of number
  if (num > MAX) {
    return MAX;
  }
  if (num < MIN) {
    return MIN;
  }

  return num;
}
// @lc code=end

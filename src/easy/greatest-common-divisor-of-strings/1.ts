/*
 * @lc app=leetcode id=1071 lang=typescript
 *
 * [1071] Greatest Common Divisor of Strings
 */

// @lc code=start
function gcdOfStrings(str1: string, str2: string): string {
  if (str1 + str2 != str2 + str1) {
    return '';
  }
  return str1.slice(0, gcd(str1.length, str2.length));
}

// get gcd of string length
function gcd(a: number, b: number): number {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
}

// @lc code=end

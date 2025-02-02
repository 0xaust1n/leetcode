/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
function romanToInt(s: string): number {
  const mapping: Map<String, number> = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
    ['IV', 4],
    ['IX', 9],
    ['XL', 40],
    ['XC', 90],
    ['CD', 400],
    ['CM', 900],
  ]);

  // early return handle length 1
  if (s.length == 1) {
    return mapping.get(s)!;
  }

  let count = 0;

  for (let i = 0, j = i + 1; i < s.length; i++, j = i + 1) {
    if (mapping.has(`${s[i]}${s[j]}`)) {
      count += mapping.get(`${s[i]}${s[j]}`)!;
      i++;
    } else {
      count += mapping.get(s[i])!;
    }
  }
  return count;
}
// @lc code=end

/* two pointer */
/* time complexity O(n) */
/* space complexity O(1) */

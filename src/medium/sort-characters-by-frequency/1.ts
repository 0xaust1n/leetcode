/*
 * @lc app=leetcode id=451 lang=typescript
 *
 * [451] Sort Characters By Frequency
 */

// @lc code=start
function frequencySort(s: string): string {
  let freqency = new Map<string, number>();
  for (const char of s) {
    freqency.set(char, (freqency.get(char) ?? 0) + 1);
  }

  let bucket: string[][] = Array.from({ length: s.length + 1 }, () => []);

  for (const [char, count] of freqency) {
    bucket[count].push(char.repeat(count));
  }

  let result = '';
  for (let i = bucket.length - 1; i >= 0; i--) {
    result += bucket[i].join('');
  }
  return result;
}

// time complexity: O(n)
// space complexity: O(n)
// @lc code=end

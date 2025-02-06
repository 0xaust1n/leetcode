/*
 * @lc app=leetcode id=151 lang=typescript
 *
 * [151] Reverse Words in a String
 */

// @lc code=start
function reverseWords(s: string): string {
  // trim the start & end
  s = s.trim();
  console.log(s);
  // handle single word
  if (!s.includes(' ')) {
    return s;
  }

  let stack = '';
  let result: String[] = [];
  for (const char of s) {
    if (stack.length == 0 && char == ' ') {
      continue;
    }

    if (char != ' ') {
      stack += char;
    }

    if (char == ' ') {
      result.push(stack);
      stack = '';
    }
  }
  // push the last stack
  result.push(stack);

  return result.reverse().join(' ');
}
// @lc code=end

// logical stack
// space complexity: O(n)
// time complexity: O(n)

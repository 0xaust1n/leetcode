package palindromenumber

import "strconv"

/*
 * @lc app=leetcode id=9 lang=golang
 *
 * [9] Palindrome Number
 * two pionter approach
 */

// @lc code=start
func isPalindrome(x int) bool {
	str := strconv.Itoa(x)
	l := 0
	r := len(str) - 1
	for r > l {
		if str[l] != str[r] {
			return false
		}
		l++
		r--
	}
	return true
}

// @lc code=end

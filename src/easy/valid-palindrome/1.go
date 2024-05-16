// approaching 1
package main

import "strings"

/*
 * @lc app=leetcode id=125 lang=golang
 *
 * [125] Valid Palindrome
 */

// @lc code=start
func isPalindromeA1(s string) bool {
	strArry := strings.SplitAfter(s, "")

	if len(strArry) == 0 {
		return true
	}

	var pureAlphabetArray []string

	// do the dirty job.
	for k, v := range []byte(s) {
		if isAlphanumeric(v) {
			pureAlphabetArray = append(pureAlphabetArray, strings.ToLower(strArry[k]))
		}
	}

	maxIndex := len(pureAlphabetArray) - 1
	for i, v := range pureAlphabetArray {
		if i == maxIndex-i {
			break
		}
		if v == pureAlphabetArray[maxIndex-i] {

			continue
		} else {
			return false
		}
	}
	return true
}

func isAlphanumeric(c byte) bool {
	return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9')
}

// @lc code=end

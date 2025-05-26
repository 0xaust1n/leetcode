package main

/*
 * @lc app=leetcode id=20 lang=golang
 *
 * [20] Valid Parentheses
 */

// @lc code=start

func isValid(s string) bool {
	if len(s)%2 != 0 {
		return false
	}

	m := map[string]string{
		"(": ")",
		"{": "}",
		"[": "]",
	}

	stack := make([]string, 0, len(s))

	for _, element := range s {
		if len(stack) > 0 {
			if stack[len(stack)-1] == m[string(element)] {
				stack = stack[:len(stack)-1]
			} else {
				stack = append(stack, (string(element)))
			}
		} else {
			stack = append(stack, string(element))
		}
	}
	return len(stack) == 0
}

// @lc code=end

package main

import "fmt"

/*
 * @lc app=leetcode id=167 lang=golang
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

func main() {
	fmt.Println(twoSum([]int{5, 25, 75}, 100))
}

// @lc code=start
func twoSum(numbers []int, target int) []int {
	l, r := 0, len(numbers)-1
	for l < len(numbers)-1 {
		if target > (numbers[l] + numbers[r]) {
			l++
		} else if target < (numbers[l] + numbers[r]) {
			r--
		} else {
			return []int{l + 1, r + 1}
		}
	}
	return []int{}
}

// @lc code=end

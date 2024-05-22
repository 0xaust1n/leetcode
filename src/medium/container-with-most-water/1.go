package main

import (
	"fmt"
	"math"
)

/*
 * @lc app=leetcode id=11 lang=golang
 *
 * [11] Container With Most Water
 */

func main() {
	ary := []int{2, 3, 4, 5, 18, 17, 6}
	// ary := []int{1, 8, 6, 2, 5, 4, 8, 3, 7}
	fmt.Println(maxArea(ary))
}

// @lc code=start
func maxArea(height []int) int {
	result := 0
	for i, j := 0, len(height)-1; i < j; {
		curr := math.Min(float64(height[i]), float64(height[j])) * float64(j-i)
		if float64(result) < curr {
			result = int(curr)
		}
		if height[i] < height[j] {
			i++
		} else {
			j--
		}
	}

	return result
}

// @lc code=end

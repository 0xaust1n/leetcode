package main

import (
	"sort"
)

// func main() {
// 	// res := threeSum([]int{-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4})
// 	res := threeSum([]int{-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6})
// 	// res := threeSum([]int{-1, 0, 1})
// 	fmt.Println("---result----")
// 	fmt.Println(res)
// }

/*
 * @lc app=leetcode id=15 lang=golang
 *
 * [15] 3Sum
 */

// @lc code=start
func threeSum(nums []int) [][]int {
	var result [][]int

	if len(nums) < 3 {
		return result
	}

	sort.Ints(nums)

	for i := 0; i < len(nums)-1; i++ {
		if i > 0 && nums[i] == nums[i-1] {
			continue
		}

		for mid, k := i+1, len(nums)-1; mid < k; {
			if nums[i]+nums[mid]+nums[k] == 0 {
				result = append(result, []int{nums[i], nums[mid], nums[k]})
				mid++
				for mid < k && nums[mid] == nums[mid-1] {
					mid++
				}
			} else if nums[i]+nums[mid]+nums[k] < 0 {
				mid++
			} else if nums[i]+nums[mid]+nums[k] > 0 {
				k--
			}
		}
	}
	return result
}

// @lc code=end

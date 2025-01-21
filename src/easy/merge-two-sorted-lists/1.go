/*
 * @lc app=leetcode id=21 lang=golang
 *
 * [21] Merge Two Sorted Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
package mergeTwoLists

import "sort"

type ListNode struct {
	Val  int
	Next *ListNode
}

func mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {
	ls := []int{}

	for list1 != nil {
		ls = append(ls, list1.Val)
		list1 = list1.Next
	}

	for list2 != nil {
		ls = append(ls, list2.Val)
		list2 = list2.Next
	}

	sort.Ints(ls)

	var last *ListNode
	for i := len(ls) - 1; i >= 0; i-- {
		current := &ListNode{
			Val:  ls[i],
			Next: last,
		}
		last = current
	}

	return last
}

// @lc code=end

// time complexity: O(n + m) space complexity: O(n + m)

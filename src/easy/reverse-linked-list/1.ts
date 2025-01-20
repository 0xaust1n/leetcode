import { ListNode } from './list-node';
/*
 * @lc app=leetcode id=206 lang=typescript
 *
 * [206] Reverse Linked List
 */

// @lc code=start

// Definition for singly-linked list.
function reverseList(head: ListNode | null): ListNode | null {
  const nums: number[] = [];
  while (head) {
    nums.push(head.val);
    head = head.next;
  }

  let result: ListNode | null = null;
  for (let i = 0; i < nums.length; i++) {
    const tempNode = new ListNode(nums[i], result);
    result = tempNode;
  }
  return result;
}

// space-complexity: O(n) time-complexity: O(n) pretty sad :(
// @lc code=end

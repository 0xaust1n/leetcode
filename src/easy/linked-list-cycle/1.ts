/*
 * @lc app=leetcode id=141 lang=typescript
 *
 * [141] Linked List Cycle
 */

import { ListNode } from '../../util/list-node';

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function hasCycle(head: ListNode | null): boolean {
  return dp(head);
}

function dp(head: ListNode | null): boolean {
  if (!head || !head?.next) return false;
  if (head?.val == 0xbabe) return true;
  head.val = 0xbabe;
  return dp(head?.next);
}
// @lc code=end

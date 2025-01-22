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

import { ListNode } from '../../easy/reverse-linked-list/list-node';

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  let isOverflow = false;
  return dp(l1, l2, isOverflow);
}

function dp(l1: ListNode | null, l2: ListNode | null, isOverflow: boolean) {
  if (l1 == null && l2 == null && !isOverflow) {
    return null;
  }

  let result = 0;
  if (l1) {
    result += l1.val;
  }

  if (l2) {
    result += l2.val;
  }

  if (isOverflow) {
    result += 1;
  }

  if (result >= 10) {
    isOverflow = true;
    result = result % 10;
  } else {
    isOverflow = false;
  }

  let temp = new ListNode();
  temp.val = result;
  temp.next = dp(l1?.next || null, l2?.next || null, isOverflow);
  return temp;
}

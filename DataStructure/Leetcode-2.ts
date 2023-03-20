// https://leetcode.com/problems/add-two-numbers

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

const nextNode = (l: ListNode) => l.next ?? l;

const addTwoNumbers = (
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null => {
  const head = new ListNode();
  let ptr = head;
  let l1Ptr = l1,
    l2Ptr = l2;
  let carry = 0;

  while (1) {
    ptr.val = (l1Ptr?.val ?? 0) + (l2Ptr?.val ?? 0);

    if (carry) {
      ptr.val += carry;
      carry = 0;
    }

    if (ptr.val >= 10) {
      carry = 1;
      ptr.val -= 10;
    }

    if (!l1Ptr?.next && !l2Ptr?.next) {
      break;
    }

    ptr.next = new ListNode();

    l1Ptr = l1Ptr?.next ?? null;
    l2Ptr = l2Ptr?.next ?? null;
    ptr = ptr.next;
  }

  if (carry) {
    ptr.next = new ListNode(carry, null);
  }

  return head;
};

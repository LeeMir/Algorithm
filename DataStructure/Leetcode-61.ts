// https://leetcode.com/problems/rotate-list

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

const rotateRight = (head: ListNode | null, k: number): ListNode | null => {
  if (!head?.next) {
    return head;
  }

  let tail = head;
  let size = 1;
  while (1) {
    if (!tail?.next) {
      tail.next = head;
      break;
    }
    tail = tail.next;
    size += 1;
  }

  k %= size;

  for (let i = 0; i < size - k; i++) {
    tail = tail.next;
    head = head.next;
  }

  tail.next = null;

  return head;
};

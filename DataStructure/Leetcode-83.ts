// https://leetcode.com/problems/remove-duplicates-from-sorted-list

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return head;
  let prev: ListNode | null = head;
  let ptr = prev.next;

  let tmp = head.val;

  while (ptr) {
    if (prev && ptr.val === tmp) {
      prev.next = ptr.next;
    } else {
      tmp = ptr.val;
      prev = prev?.next ?? null;
    }
    ptr = ptr.next;
  }

  return head;
}

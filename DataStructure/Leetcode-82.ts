// https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return null;
  if (!head.next) return head;

  let headPtr = new ListNode(undefined, head);
  let prev = headPtr;
  let ptr: ListNode | null = head;

  while (ptr) {
    while (ptr.next && prev.next && prev.next.val === ptr.next.val)
      ptr = ptr.next;

    if (prev.next === ptr) {
      prev = prev.next;
    } else {
      prev.next = ptr.next;
    }

    ptr = ptr.next;
  }

  return headPtr.next;
}

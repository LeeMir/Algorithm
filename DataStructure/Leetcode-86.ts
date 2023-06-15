// https://leetcode.com/problems/partition-list

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function partition(head: ListNode | null, x: number): ListNode | null {
  const preXHead = new ListNode(0, null);
  const afterXHead = new ListNode(0, null);
  let preXPtr = preXHead;
  let afterXPtr = afterXHead;
  let ptr = head;

  while (ptr) {
    if (ptr.val < x) {
      preXPtr.next = ptr;
      preXPtr = ptr;
    } else {
      afterXPtr.next = ptr;
      afterXPtr = ptr;
    }
    ptr = ptr.next;
  }

  afterXPtr.next = null;
  preXPtr.next = afterXHead.next;
  return preXHead.next;
}

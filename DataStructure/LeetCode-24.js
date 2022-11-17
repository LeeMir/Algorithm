// https://leetcode.com/problems/swap-nodes-in-pairs/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = (head) => {
  if (head === null || head.next === null) {
    return head;
  }
  
  let ptr = new ListNode();
  
  ptr.next = head;
  const result = ptr;

  while(ptr.next && ptr.next.next){
    const p = ptr.next;
    const q = ptr.next.next;
    ptr.next = q;
    p.next = q.next;
    q.next = p;
    ptr = p
  }
  return result.next;
};

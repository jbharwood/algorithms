// Reverse a singly linked list.
//
// Example:
//
// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL

// Iterative
var reverseListI = function(head) {
  let prev = null;
  while (head) {
    const next = head.next;
    const curr = head;
    curr.next = prev;
    head = next;
    prev = curr;
  }
  return prev;
};

// Recursive
var reverseListR = function(head, prev = null) {
  if (head === null) {
    return null;
  }
  const next = reverseList(head.next, head);
  head.next = prev;
  return next || head;
};

console.log(reverseListI(1->2->3->4->5->NULL));
console.log(reverseListR(1->2->3->4->5->NULL));

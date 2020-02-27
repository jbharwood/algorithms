//hackerrank interview preperation kit

// Sample Input
//
// 3
// 16
// 13
// 7
// 1
// 2
// Sample Output
//
// 16 13 1 7
// Explanation
//
// The initial linked list is 16 13 7. We have to insert  at the position  which currently has  in it.
// The updated linked list will be 16 13 1 7

function insertNodeAtPosition(head, data, position) {
  const node = new SinglyLinkedListNode(data);
  if (!head) {
    head = node;
  } else {
    var prev = head;
    var current = head.next
    for (var i = 0; i !== position - 1; i++) {
      prev = prev.next;
      current = current.next
    }
    prev.next = node
    node.next = current
  }
  return head
}

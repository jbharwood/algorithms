// Given head which is a reference node to a singly-linked list. The value of each
// node in the linked list is either 0 or 1. The linked list holds the binary
// representation of a number.
//
// Return the decimal value of the number in the linked list.
//
// Example 1:
//
//
// Input: head = [1,0,1]
// Output: 5
// Explanation: (101) in base 2 = (5) in base 10
// Example 2:
//
// Input: head = [0]
// Output: 0
// Example 3:
//
// Input: head = [1]
// Output: 1
// Example 4:
//
// Input: head = [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]
// Output: 18880
// Example 5:
//
// Input: head = [0,0]
// Output: 0

var getDecimalValue = function(head) {
  let result = 0
  while (head) {
    result = result * 2 + head.val
    head = head.next
  }
  return result
};

// class LinkedList {
//   constructor() {
//     this.tail = this.head = null;
//     this.length = 0;
//   }
//
//   push(value) {
//     const node = new Node(value);
//     this.length++;
//     if (!this.head) {
//      this.head = node;
//     }
//     else {
//       this.tail.next = node;
//     }
//     this.tail = node;
//   }
// }
//
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
//
// let n1 = new Node(1)
// let n2 = new Node(0)
// let n3 = new Node(1)
// let l1 = new LinkedList()
// l1.push(n1)
// l1.push(n2)
// l1.push(n3)
// console.log(l1);

console.log(getDecimalValue(l1));

/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
  const stack = [root];
  let totalSum = 0;
  while (stack.length !== 0) {
    const node = stack.shift();
    if (node.val <= R && node.val >= L)
        totalSum += node.val;
    if (node.left)
        stack.push(node.left);
    if (node.right)
        stack.push(node.right);
  }
  return totalSum;
};

console.log(rangeSumBST([10,5,15,3,7,null,18], 7, 15));
// console.log(rangeSumBST());

// Example 1:
//
// Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
// Output: 32
// Example 2:
//
// Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
// Output: 23

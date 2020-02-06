var climbStairs = function(n) {
  let a = 1, b = 2, next;

  for (let i = 3; i <= n; i++) {
    next = a + b;
    a = b;
    b = next;
  }
  console.log("a: " + a);
  console.log("b: " + b);
  return n === 1 ? a : b;
};

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));

// Example 1:
//
// Input: 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:
//
// Input: 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

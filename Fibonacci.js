var fib = function(n) {
  if (n <= 1) return n
  return fib(n-1) + fib(n-2)
};

console.log(fib(2));
console.log(fib(3));
console.log(fib(4));

// Example 1:
//
// Input: 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:
//
// Input: 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:
//
// Input: 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

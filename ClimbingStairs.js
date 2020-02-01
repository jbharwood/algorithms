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

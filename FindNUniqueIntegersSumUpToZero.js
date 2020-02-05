var sumZero = function(n) {
  let arr = []
  if (n % 2) arr.push(0);
  for (let i = 1; i <= n / 2; ++i) {
    arr.unshift(-i), arr.push(i);
  }
  return arr;
};

console.log(sumZero(5));
console.log(sumZero(3));
console.log(sumZero(1));

// Example 1:
//
// Input: n = 5
// Output: [-7,-1,1,3,4]
// Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].
// Example 2:
//
// Input: n = 3
// Output: [-1,0,1]
// Example 3:
//
// Input: n = 1
// Output: [0]

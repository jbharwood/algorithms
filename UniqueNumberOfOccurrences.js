var uniqueOccurrences = function(arr) {
  let count = {}
  let check = {}
  let flag = true
  arr.forEach(a => count[a] ? count[a]++ : count[a] = 1)
  for (let key in count) {
    if (check[count[key]]) {
      flag = false
    } else {
      check[count[key]] = 1
    }
  }
  return flag
};

console.log(uniqueOccurrences([1,2,2,1,1,3]));
console.log(uniqueOccurrences([1,2]));
console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]));

// Example 1:
//
// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
// Example 2:
//
// Input: arr = [1,2]
// Output: false
// Example 3:
//
// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true

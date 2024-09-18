var majorityElement = function(nums) {
  let count = {}
  nums.forEach((num) => count[num] ? count[num]++ : count[num] = 1)

  let ans = null
  let max = 0
  for(let key in count) {
    if (count[key] > max) {
      max = count[key]
      ans = key
    }
  }
  return ans
};

console.log(majorityElement([3,2,3]));
console.log(majorityElement([2,2,1,1,1,2,2]));
console.log(majorityElement([3,3,4]));

// Example 1:
//
// Input: [3,2,3]
// Output: 3
// Example 2:
//
// Input: [2,2,1,1,1,2,2]
// Output: 2

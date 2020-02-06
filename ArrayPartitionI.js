var arrayPairSum = function(nums) {
  nums.sort((a, b) => (a - b));
  let result = 0;
  for(let i = 0; i < nums.length; i += 2){
    result += nums[i];
  }
  return result;
};

console.log(arrayPairSum([1,4,3,2]));

// Example 1:
// Input: [1,4,3,2]
//
// Output: 4
// Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).

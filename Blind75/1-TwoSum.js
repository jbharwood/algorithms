// Time complexity: O(n)
// Space complexity: O(n)

class Solution {
  twoSum(nums, target) {
    let res = {};
    for (let i = 0; i < nums.length; i++) {
      let diff = target - nums[i];

      if (res[diff]) {
        return [res[diff], i];
      }

      res[nums[i]] = i;
    }
  }
}

// Testing the algorithm with the examples
const solution = new Solution();
// Output the results
console.log("Output:", solution.twoSum([3, 2, 4], 6));
console.log("Output:", solution.twoSum([-1, -2, -3, -4, -5], -8));
console.log("Output:", solution.twoSum([10, 15, 21, 25, 30], 45));

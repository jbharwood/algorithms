// Time Complexity: O(n) - We iterate through the array only once.
// Space Complexity: O(1) - We use a constant amount of space regardless of the input size.

class Solution {
  maxProduct(nums) {
    if (nums.length === 0) return 0;
    let minCurrent = nums[0];
    let maxCurrent = nums[0];
    let maxProduct = nums[0];

    for (let i = 1; i < nums.length; i++) {
      if (nums[i] < 0) {
        [maxCurrent, minCurrent] = [minCurrent, maxCurrent];
      }

      maxCurrent = Math.max(maxCurrent * nums[i], nums[i]);
      minCurrent = Math.min(minCurrent * nums[i], nums[i]);
      maxProduct = Math.max(maxProduct, maxCurrent);
    }

    return maxProduct;
  }
}

const sol = new Solution();
console.log(sol.maxProduct([2, 3, -2, 4])); // 6
console.log(sol.maxProduct([-2, 0, -1])); // 0
console.log(sol.maxProduct([-2, 3, 2, -4])); // 48

// Time Complexity: O(n) - We iterate through the array three times.
// Space Complexity: O(n) - We use three additional arrays of size n.

class Solution {
  productExceptSelf(nums) {
    const n = nums.length;
    const left = new Array(n).fill(1);
    const right = new Array(n).fill(1);
    const result = new Array(n).fill(1);

    // Populate the left array
    for (let i = 1; i < n; i++) {
      left[i] = left[i - 1] * nums[i - 1];
    }

    // Populate the right array
    for (let i = n - 2; i >= 0; i--) {
      right[i] = right[i + 1] * nums[i + 1];
    }

    // Calculate the result array
    for (let i = 0; i < n; i++) {
      result[i] = left[i] * right[i];
    }

    return result;
  }
}

// Testing the function
const sol = new Solution();
console.log(sol.productExceptSelf([2, 3, 4, 5]));
console.log(sol.productExceptSelf([1, 1, 1, 1]));
console.log(sol.productExceptSelf([10, 20, 30, 40]));

class Solution {
  containsDuplicate(nums) {
    let set = new Set();

    for (let i = 0; i < nums.length; i++) {
      if (set.has(nums[i])) {
        return true;
      }
      set.add(nums[i]);
    }

    return false;
  }
}

const sol = new Solution();
const nums1 = [1, 2, 3, 4];
console.log(sol.containsDuplicate(nums1)); // Expected output: false

const nums2 = [1, 2, 3, 1];
console.log(sol.containsDuplicate(nums2)); // Expected output: true

const nums3 = [];
console.log(sol.containsDuplicate(nums3)); // Expected output: false

const nums4 = [1, 1, 1, 1];
console.log(sol.containsDuplicate(nums4)); // Expected output: true

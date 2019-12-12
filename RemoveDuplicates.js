/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  x = 0
  if (nums.length === 0) return 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[x]) {
      x++
      nums[x] = nums[i]
    }
  }
  return x + 1
};

console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));

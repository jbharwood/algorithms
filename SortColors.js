/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < nums.length; i++) {
      if (nums[i - 1] > nums[i]) {
        done = false;
        var tmp = nums[i - 1];
        nums[i - 1] = nums[i];
        nums[i] = tmp;
      }
    }
  }

  return nums;
};

console.log(sortColors([2,0,2,1,1,0])); //[0,0,1,1,2,2]

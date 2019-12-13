/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let cur = nums[0];
  let res = nums[0];
  for (let i = 1; i < nums.length; i ++){
    if (cur < 0) {
      cur = nums[i];
    }
    else {
      cur += nums[i];
    }
    res = Math.max(res, cur);
  }
  return res;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));

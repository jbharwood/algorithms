var twoSum = function(nums, target) {
  let numObject = {};
  for (var i = 0; i < nums.length; i++) {
    let thisNum = nums[i];
    numObject[thisNum] = i;
  }
  for (var i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (numObject.hasOwnProperty(diff) && numObject[diff] !== i) {
        return [i, numObject[diff]];
    }
  }
};

// Example:
//
// Given nums = [2, 7, 11, 15], target = 9,
//
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

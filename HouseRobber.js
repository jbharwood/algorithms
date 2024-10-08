var rob = function(nums) {
  let previous = 0;
  let beforePrevious = 0;

  for(let i = 0; i < nums.length; i++) {
    let tmp = previous;
    previous = Math.max(nums[i] + beforePrevious, previous);
    beforePrevious = tmp;
  }

  return previous;
};

console.log(rob([1,2,3,1]));
console.log(rob([2,7,9,3,1]));
console.log(rob([2,1,1,2]));

// You are a professional robber planning to rob houses along a street. Each house 
// has a certain amount of money stashed, the only constraint stopping you from
// robbing each of them is that adjacent houses have security system connected and
// it will automatically contact the police if two adjacent houses were broken
// into on the same night.
//
// Given a list of non-negative integers representing the amount of money of each
// house, determine the maximum amount of money you can rob tonight without
// alerting the police.

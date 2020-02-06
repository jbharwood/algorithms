var singleNumber = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    let tmp = nums.pop();
    if(nums.includes(tmp)) {
      nums.unshift(tmp);
      continue;
    }
    return tmp;
  }
};

console.log(singleNumber([2,2,1]));
console.log(singleNumber([2,2,1,1,3]));

// Example 1:
//
// Input: [2,2,1]
// Output: 1
// Example 2:
//
// Input: [4,1,2,1,2]
// Output: 4

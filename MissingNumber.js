var missingNumber = function(nums) {
  let sum = 0, total = 0
  for(let i = 0; i < nums.length; i++) {
    sum += nums[i]
    total += i + 1
    // console.log("sum: " + sum);
    // console.log("total: " + total);
  }
  return total - sum
};

console.log(missingNumber([3,0,1]));
console.log(missingNumber([9,6,4,2,3,5,7,0,1]));
console.log(missingNumber([0]));
console.log(missingNumber([1]));

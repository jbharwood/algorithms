var plusOne = function(digits) {
  for(let i = digits.length - 1; i >= 0; i--){
    if(digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }

  let res = Array(digits.length + 1).fill(0);
  res[0] = 1;
  return res;
};

console.log(plusOne([1,2,3]));
console.log(plusOne([4,3,2,1]));
console.log(plusOne([9,9]));
console.log(plusOne([1,9]));

// Example 1:
//
// Input: [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:
//
// Input: [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.

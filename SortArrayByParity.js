var sortArrayByParity = function(A) {
  let ans = []
  for (let i = A.length-1; i >= 0; i--) {
    if (A[i] % 2 === 0) {
      ans.unshift(A[i])
    } else {
      ans.push(A[i])
    }
  }
  return ans
};

console.log(sortArrayByParity([3,1,2,4]));

// Example 1:
//
// Input: [3,1,2,4]
// Output: [2,4,3,1]
// The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

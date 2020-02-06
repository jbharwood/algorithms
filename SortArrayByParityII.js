var sortArrayByParityII = function(A) {
  let evens = [], odds = [], ans = []
  A.forEach(a => a % 2 === 0 ? evens.push(a) : odds.push(a))
  A.forEach((a, i) => {
    if (i % 2 === 0) {
      ans.push(evens[0])
      evens.shift()
    } else  {
      ans.push(odds[0])
      odds.shift()
    }
  })
  return ans
};

console.log(sortArrayByParityII([4,2,5,7]));

// Example 1:
//
// Input: [4,2,5,7]
// Output: [4,5,2,7]
// Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.

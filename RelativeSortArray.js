var relativeSortArray = function(arr1, arr2) {
  let count1 = {}
  let count2 = {}
  let ans = []
  let missing = []
  arr1.forEach(a => count1[a] ? count1[a]++ : count1[a] = 1)
  arr2.forEach((a, i) => {
    if (count1.hasOwnProperty(a)) {
      for (let x = 0; x < count1[a]; x++) {
        ans.push(a);
      }
    }
  })

  arr2.forEach(a => count2[a] ? count2[a]++ : count2[a] = 1)
  arr1.forEach((a, i) => {
    if (!count2[a]) {
      missing.push(a);
    }
  })

  let sorted = missing.sort((a, b) => a - b)
  return ans.concat(sorted)
};

console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]));
console.log(relativeSortArray([2,21,43,38,0,42,33,7,24,13,12,27,12,24,5,23,29,48,30,31],
[2,42,38,0,43,21])); //[2,42,38,0,43,21,5,7,12,12,13,23,24,24,27,29,30,31,33,48]

// Example 1:
//
// Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
// Output: [2,2,2,1,4,3,3,9,6,7,19]

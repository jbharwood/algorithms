var replaceElements = function(arr) {
  let maxEle = -1
  for (let i = arr.length - 1; i >= 0; i--) {
    let currentEle = arr[i]
    arr[i] = maxEle
    if (currentEle > maxEle) {
      maxEle = currentEle
    }
  }
  return arr
};

console.log(replaceElements([17,18,5,4,6,1]));

// Example 1:
//
// Input: arr = [17,18,5,4,6,1]
// Output: [18,6,6,6,1,-1]

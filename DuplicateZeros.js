var duplicateZeros = function(arr) {
  let lens = arr.length;
  for(let i = 0; i < lens; i++){
    if(arr[i] === 0){
      arr.splice(i,0,0);
      i++;
    }
  }
  arr.length = lens;
  return arr
}

console.log(duplicateZeros([1,0,2,3,0,4,5,0]));
console.log(duplicateZeros([1,2,3]));

// Example 1:
//
// Input: [1,0,2,3,0,4,5,0]
// Output: null
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
// Example 2:
//
// Input: [1,2,3]
// Output: null
// Explanation: After calling your function, the input array is modified to: [1,2,3]

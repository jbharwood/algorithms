//hackerrank interview prep guide

function countSwaps(a) {
  let count = 0
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - 1; j++) {
      // Swap adjacent elements if they are in decreasing order
      if (a[j] > a[j + 1]) {
        count++
        let temp = a[j]
        a[j] = a[j+1]
        a[j+1] = temp
      }
    }
  }
  console.log(`Array is sorted in ${count} swaps.\nFirst Element: ${a[0]}\nLast Element: ${a[a.length - 1]}`);
}

// For example, given a worst-case but small array to sort:  we go through the following steps:
//
// swap    a
// 0       [6,4,1]
// 1       [4,6,1]
// 2       [4,1,6]
// 3       [1,4,6]
// It took  swaps to sort the array. Output would be
//
// Array is sorted in 3 swaps.
// First Element: 1
// Last Element: 6

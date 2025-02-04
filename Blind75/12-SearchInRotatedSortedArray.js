class Solution {
  search(arr, key) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
      let mid = Math.floor(start + (end - start) / 2);

      if (arr[mid] === key) {
        return mid;
      }

      if (arr[start] <= arr[mid]) {
        // left side sorted asc
        if (key >= arr[start] && key < arr[mid]) {
          end = mid - 1;
        } else {
          // key > arr[mid]
          start = mid + 1;
        }
      } else {
        // right side sorted asc
        if (key > arr[mid] && key <= arr[end]) {
          start = mid + 1;
        } else {
          end = mid - 1;
        }
      }
    }

    return -1;
  }
}

const sol = new Solution();
console.log(sol.search([10, 15, 1, 3, 8], 15)); // 1
console.log(sol.search([4, 5, 7, 9, 10, -1, 2], 10)); // 4

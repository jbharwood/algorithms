// Time Complexity: O(n^2) - We iterate through the array and for each element, we use a two-pointer approach.
// Space Complexity: O(n) - We use extra space for sorting.

// 2 pointer
class Solution {
  searchTriplets(arr) {
    const triplets = [];
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
      // skip same element to avoid duplicate triplets
      if (i > 0 && arr[i] === arr[i - 1]) continue;

      this.searchPair(arr, -arr[i], i + 1, triplets);
    }

    return triplets;
  }

  searchPair(arr, targetSum, left, triplets) {
    let right = arr.length - 1;

    while (left < right) {
      const currentSum = arr[left] + arr[right];

      if (currentSum === targetSum) {
        triplets.push([-targetSum, arr[left], arr[right]]);
        left++;
        right--;

        while (left < right && arr[left] === arr[left - 1]) {
          left++; // skip same element to avoid duplicate triplets
        }

        while (left < right && arr[right] === arr[right + 1]) {
          right--; // skip same element to avoid duplicate triplets
        }
      } else if (targetSum > currentSum) {
        left++;
      } else {
        right--;
      }
    }
  }
}

const sol = new Solution();
console.log(sol.searchTriplets([-3, 0, 1, 2, -1, 1, -2]));
console.log(sol.searchTriplets([-5, 2, -1, -2, 3]));

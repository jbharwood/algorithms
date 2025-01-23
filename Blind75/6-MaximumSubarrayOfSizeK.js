class Solution {
  findMaxSumSubArray(k, arr) {
    let res = 0,
      windowStart = 0,
      windowSum = 0.0;

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
      windowSum += arr[windowEnd];

      if (windowEnd >= k - 1) {
        res = Math.max(res, windowSum);
        windowSum -= arr[windowStart];
        windowStart++;
      }
    }

    return res;
  }
}

const sol = new Solution();
console.log(
  `Maximum sum of a subarray of size K: ${sol.findMaxSumSubArray(
    3,
    [2, 1, 5, 1, 3, 2]
  )}`
);
console.log(
  `Maximum sum of a subarray of size K: ${sol.findMaxSumSubArray(
    2,
    [2, 3, 4, 1, 5]
  )}`
);

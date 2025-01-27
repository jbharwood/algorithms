// Time Complexity: O(n) - We iterate through the prices array once.
// Space Complexity: O(1) - We use a constant amount of extra space.

class Solution {
  maxProfit(prices) {
    let min = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
      min = Math.min(min, prices[i]);
      maxProfit = Math.max(maxProfit, prices[i] - min);
    }

    return maxProfit;
  }
}

// Testing the algorithm
const solution = new Solution();
const example1 = [3, 2, 6, 5, 0, 3];
const example2 = [8, 6, 5, 2, 1];
const example3 = [1, 2];
console.log(solution.maxProfit(example1)); // Output: 4
console.log(solution.maxProfit(example2)); // Output: 0
console.log(solution.maxProfit(example3)); // Output: 1

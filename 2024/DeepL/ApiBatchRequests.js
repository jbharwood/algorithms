// 3. Optimal API Request Batching
// Given an array of API requests, batch them into groups of size n to optimize throughput while preserving order.

// Problem: Write a function batchRequests(requests, n) that takes an array of requests and returns an array of batches.
// Focus:
// Ensure each batch has at most n requests.
// Maintain order of requests.

function batchRequests(requests, n) {
  const batches = [];
  for (let i = 0; i < requests.length; i += n) {
    batches.push(requests.slice(i, i + n));
  }
  return batches;
}

// Example usage:
const requests = [1, 2, 3, 4, 5];
console.log(batchRequests(requests, 2)); // [[1, 2], [3, 4], [5]]
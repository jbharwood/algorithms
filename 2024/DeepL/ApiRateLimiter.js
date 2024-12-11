// . API Rate Limiter
// Design an API rate limiter that limits the number of requests a user can make in a specific time window.

// Problem: Write a function createRateLimiter(maxRequests, timeWindow) that returns a rate limiter instance. The instance should have a method allowRequest(userId) that returns true if the request is allowed or false otherwise.
// Focus:
// Use appropriate data structures (e.g., Map with timestamps).
// Ensure efficiency for large numbers of users and requests.
// Consider edge cases like time boundaries.

class RateLimiter {
  constructor(maxRequests, timeWindow) {
    this.maxRequests = maxRequests
    this.timeWindow = timeWindow
    this.users = {}
  }
  allowRequest(userId) {
    const currentTime = Date.now()

    if (!this.users[userId]) {
        this.users[userId] = []
    }

    const requestTimes = this.users[userId]

    while (requestTimes.length && requestTimes[0] <= currentTime - this.timeWindow) {
        requestTimes.shift()
    }

    if (requestTimes.length < this.maxRequests) {
        requestTimes.push(currentTime)
        return true
    }

    return false
  }
}

// Example usage:
const limiter = new RateLimiter(10, 60000); // 10 requests per minute
console.log(limiter.allowRequest("user123")); // true
console.log(limiter.allowRequest("user123")); // true or false depending on usage
const limiter1 = new RateLimiter(1, 60000); // 10 requests per minute
console.log(limiter1.allowRequest("user123")); // true
console.log(limiter1.allowRequest("user123")); // true or false depending on usage
// 4. DeepL Translation Cache
// Implement a caching system for an API that returns translations. The cache should store results for specific inputs and invalidate entries older than t seconds.

// Problem: Create a class TranslationCache with methods:
// get(key): Retrieve a translation or null if expired.
// set(key, value): Add a translation.
// Focus:
// Optimize lookup and eviction.
// Use Map or custom data structures.

class TranslationCache {
  constructor(ttl) {
    this.ttl = ttl
    this.cache = new Map()
  }
  set(key, value) {
    const expiration = Date.now() + this.ttl * 1000
    this.cache.set(key, { value, expiration })
  }
  get(key) {
    const entry = this.cache.get(key)

    if (!entry || entry.expiration < Date.now()) {
        this.cache.delete(key)
        return null
    }

    return entry.value
  }
}

// Example usage:
const cache = new TranslationCache(10); // 10 seconds TTL
cache.set("hello", "hola");
console.log(cache.get("hello")); // "hola" (if within 10 seconds)
// Time Complexity: O(n) - We iterate through both strings once.
// Space Complexity: O(1) - The hash table will contain at most 26 characters.

class Solution {
  isAnagram(s, t) {
    if (s.length !== t.length) return false;

    let hash = {};

    for (let i = 0; i < s.length; i++) {
      hash[s[i]] = (hash[s[i]] || 0) + 1;
      hash[t[i]] = (hash[t[i]] || 0) - 1;
    }

    for (let x in hash) {
      if (hash[x] !== 0) {
        return false;
      }
    }

    return true;
  }
}

var sol = new Solution();

// Test case 1
var s1 = "listen";
var t1 = "silent";
console.log(sol.isAnagram(s1, t1)); // Expected output: true

// Test case 2
var s2 = "hello";
var t2 = "world";
console.log(sol.isAnagram(s2, t2)); // Expected output: false

// Test case 3
var s3 = "anagram";
var t3 = "nagaram";
console.log(sol.isAnagram(s3, t3)); // Expected output: true

// Test case 4
var s4 = "rat";
var t4 = "car";
console.log(sol.isAnagram(s4, t4)); // Expected output: false

// Test case 5
var s5 = "";
var t5 = "";
console.log(sol.isAnagram(s5, t5)); // Expected output: true

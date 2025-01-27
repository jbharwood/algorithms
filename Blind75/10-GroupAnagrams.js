// Time Complexity: O(n * k log k) - We iterate through each string and sort it, where n is the number of strings and k is the maximum length of a string.
// Space Complexity: O(n * k) - We use extra space for the hash table and the grouped anagrams.

class Solution {
  groupAnagrams(strs) {
    let hash = {};

    for (let word of strs) {
      const sorted = [...word].sort().join("");

      if (!hash[sorted]) {
        hash[sorted] = [];
      }

      hash[sorted].push(word);
    }

    return Object.values(hash);
  }
}

// Testing the function
const sol = new Solution();
console.log(sol.groupAnagrams(["dog", "god", "hello"]));
console.log(sol.groupAnagrams(["listen", "silent", "enlist"]));
console.log(sol.groupAnagrams(["abc", "cab", "bca", "xyz", "zxy"]));

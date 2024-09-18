var countCharacters = function(words, chars) {
  let charCount = {}
  let ans = 0
  chars.split("").forEach(a => charCount[a] ? charCount[a]++ : charCount[a] = 1)
  words.forEach(a => {
    let aArr = a.split("")
    let check = true
    let count = {}
    aArr.forEach(a => count[a] ? count[a]++ : count[a] = 1)
    aArr.forEach(b => {
      if (!charCount[b]) {
        check = false
      }
      if (count[b] > charCount[b]) {
        check = false
      }
    })
    if (check === true) {
      ans += a.length
    }
  })
  return ans
};

console.log(countCharacters(["cat","bt","hat","tree"], "atach"));
console.log(countCharacters(["hello","world","leetcode"], "welldonehoneyr"));

// Example 1:
//
// Input: words = ["cat","bt","hat","tree"], chars = "atach"
// Output: 6
// Explanation:
// The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
// Example 2:
//
// Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
// Output: 10
// Explanation:
// The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.

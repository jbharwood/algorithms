/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  let t = [];

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j <= i; j++) {
      let word = s.slice(j, i + 1);
      if (wordDict.includes(word) && (j == 0 || t[j-1] == true )) {
          t[i] = true;
      }
    }
  }
  return t[s.length - 1] || false;
};

console.log(wordBreak("leetcode", ["leet", "code"])); //true
console.log(wordBreak("applepenapple", ["apple", "pen"])); //true
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])); //false
console.log(wordBreak("bb", ["a","b","bbb","bbbb"])); //true
console.log(wordBreak("cars", ["car","ca","rs"])); //true

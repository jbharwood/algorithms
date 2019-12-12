/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let maxLen = 0
  let res = []
  for(let char of s) {
    if (res.includes(char)) {
      if (res.length > maxLen) {
        maxLen = res.length
      }
      res.push(char)
      // console.log("pre slice " + res);
      let idx = res.indexOf(char)
      res = res.slice(idx + 1)
      // console.log("after slice " + res);
    } else {
      res.push(char)
    }
  }
  // console.log("after loop " + res);
  if(res.length > maxLen) {
    maxLen = res.length
  }
  return maxLen
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("cdd"));

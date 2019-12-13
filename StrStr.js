/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let index = -1;

  if (haystack.length && needle) {
    for(let i = 0; i < haystack.length; ++i) {
      if(haystack[i] === needle[0]) {
        if(haystack.substring(i, i + needle.length) === needle) {
            return i;
        }
      }
    }

  } else if (!needle) {
    return 0;
  }
  return index;
};

console.log(strStr("hello", "ll"));
console.log(strStr("aaaaa", "bba"));
console.log(strStr("mississippi", "issip"));

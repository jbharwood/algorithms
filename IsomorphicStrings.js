var isIsomorphic = function(s, t) {
  if (s === t) return true;
  const lens = s.length;
  let i = 1;
  if (lens !== t.length) return false;
  while (i < lens) {
    if (s.indexOf(s[i]) === t.indexOf(t[i])) {
      i++;
    } else {
      break;
    }
  }
  return i === lens;
};

console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"));

// Two strings are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while
// preserving the order of characters. No two characters may map to the same
// character but a character may map to itself.

// Example 1:
//
// Input: s = "egg", t = "add"
// Output: true
// Example 2:
//
// Input: s = "foo", t = "bar"
// Output: false
// Example 3:
//
// Input: s = "paper", t = "title"
// Output: true
// Note:
// You may assume both s and t have the same length.

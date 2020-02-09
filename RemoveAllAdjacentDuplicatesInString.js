var removeDuplicates = function(S) {
  let res = [];
  for (let i = 0; i < S.length; i++) {
    if (res[res.length - 1] === S[i]) {
      res.pop();
    } else {
      res.push(S[i]);
    }
  }
  return res.join('');
};

console.log(removeDuplicates("abbaca"));

// Example 1:
//
// Input: "abbaca"
// Output: "ca"
// Explanation:
// For example, in "abbaca" we could remove "bb" since the letters are adjacent and
// equal, and this is the only possible move.  The result of this move is that the
// string is "aaca", of which only "aa" is possible, so the final string is "ca".

var commonChars = function(A) {
  let count = {}
  A.forEach((a, i) => {
    for (let x = 0; x < a.length; x++) {
      if (count[a[x]]) {
          count[a[x]]++
      } else {
          count[a[x]] = 0
      }
      // count[a[x]]--
    }
  })
  console.log(count);
  // for (let c in count) {
  //   if (count[c] / (n/2))
  // }
};

console.log(commonChars(["bella","label","roller"]));
console.log(commonChars(["cool","lock","cook"]));

// Example 1:
//
// Input: ["bella","label","roller"]
// Output: ["e","l","l"]
// Example 2:
//
// Input: ["cool","lock","cook"]
// Output: ["c","o"]

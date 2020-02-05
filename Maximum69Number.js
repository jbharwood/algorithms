var maximum69Number  = function(num) {
  let max = 0, og = num, str = num.toString()
  for (let i = 0; i < str.length; i++) {
      let s = str.split("")
      if (s[i] === "6") {
          s.splice(i, 1, "9")
      } else {
          s.splice(i, 1, "6")
      }
      num = parseInt(s.join(""))
      if (num > max) {
          max = num
      }
  }
  console.log(num);
  console.log(og);
  return og > max ? og : max
};

console.log(maximum69Number(9669));
console.log(maximum69Number(9996));
console.log(maximum69Number(9999));

// Example 1:
//
// Input: num = 9669
// Output: 9969
// Explanation:
// Changing the first digit results in 6669.
// Changing the second digit results in 9969.
// Changing the third digit results in 9699.
// Changing the fourth digit results in 9666.
// The maximum number is 9969.
// Example 2:
//
// Input: num = 9996
// Output: 9999
// Explanation: Changing the last digit 6 to 9 results in the maximum number.
// Example 3:
//
// Input: num = 9999
// Output: 9999
// Explanation: It is better not to apply any change.

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const romans = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}
  let sum = 0
  for (let i = 0; i < s.length; i++) {
    if (romans[s[i]] < romans[s[i+1]]) {
      sum -= romans[s[i]] // -1 : I
      i++;
    }
    sum += romans[s[i]] // +5 : V
  }
  return sum
};


console.log(romanToInt("III"));
console.log(romanToInt("IV"));
console.log(romanToInt("IX"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
console.log(romanToInt("DCXXI"));

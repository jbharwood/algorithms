// var isPalindrome = function(x) {
// return x.toString().split("").reverse().join("") == x
// };
const isPalindrome = (x) => {
  return x.toString().split("").reverse().join("") == x
};

console.log(isPalindrome("aba"));
console.log(isPalindrome("abab"));

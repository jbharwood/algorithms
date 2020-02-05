// var isPalindrome = function(x) {
// return x.toString().split("").reverse().join("") == x
// };
const isPalindrome = (s) => {
  let str = s.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "").toLowerCase()
  return str.split("").reverse().join("") === str
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome("abab"));
console.log(isPalindrome("aba"));

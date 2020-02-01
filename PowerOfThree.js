var isPowerOfThree = function(n) {
  if (n === 0) return false
  let power = false
  let exp = 0
  let go = true
  while (go === true) {
    if (Math.pow(3, exp) === n) {
      power = true
      go = false
    } else if (Math.pow(3, exp) > n) {
      go = false
    } else {
      exp++
    }
  }
  return power
};

console.log(isPowerOfThree(27));
console.log(isPowerOfThree(0));
console.log(isPowerOfThree(1));
console.log(isPowerOfThree(9));
console.log(isPowerOfThree(45));

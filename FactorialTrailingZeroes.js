var trailingZeroes = function(n) {
  let totalZeros = 0;

  while(n > 0) {
    n = Math.floor(n/5); //Ex: if n = (125); (125) / 5 = {25} ; (25)/5 = {5} ; (5)/5 = {1} ; totalZeros = 25 + 5 + 1 = 31;
    totalZeros += n;
  }
  return totalZeros;
};

console.log(trailingZeroes(3));
console.log(trailingZeroes(5));
console.log(trailingZeroes(7));

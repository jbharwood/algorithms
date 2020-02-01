var getSum = function(a, b) {
  let sub = 100000 - a - b
  return 100000 - sub
};

console.log(getSum(1,2));
console.log(getSum(-2,3));

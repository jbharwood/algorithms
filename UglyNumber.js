var isUgly = function(num) {
  if (num <= 0) return false;
  if (num < 5) return true;
  while (num % 2 === 0) {
      num = num / 2;
  }
  while (num % 3 === 0) {
      num = num / 3;
  }
  while (num % 5 === 0) {
      num = num / 5;
  }
  console.log(num);
  return (num === 1);
};

console.log(isUgly(6));
console.log(isUgly(8));
console.log(isUgly(14));

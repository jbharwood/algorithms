var reverse = function(x) {
  const limit = 2147483648
  const k = x < 0 ? -1 : 1;
  // let n = x.toString().split("").reverse().join("")
  let n = Number(String(Math.abs(x)).split('').reverse().join(''))
  if (n > limit) {
      return 0
  } else {
      return n * k
  }
};

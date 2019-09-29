function substrCount(n, s) {
  let substrings = []
  let combos = []
  // for (var i = 0; i < s.length; i++) {
  //   substrings.push(s[i])
    // if (s[i] === s[i+1]) {
    //   let two = s[i] + s[i]
    //   combos.push(two)
    // }
    // if (s[i] === s[i+2]) {
    //   let three = s[i] + s[i+1] + s[i+2]
    //   combos.push(three)
    // }
    // if (s[i] === s[i+3]) {
    //   let four = s[i] + s[i+1] + s[i+2] + s[i+3]
    //   combos.push(four)
    // }
  // }

  for (let i = 0; i < s.length; i++){
    // console.log(s[i]);
    substrings.push(s[i])
    // if (s.indexOf(s[i]) !== s.lastIndexOf(s[i])) {
    if (s[i] === s[i+1]) {
      combos.push(s[i] + s[i])
    }
    // let diff = (s.lastIndexOf(s[i]) + 1) - i
    // combos.push(s[i].repeat(diff))
    // console.log(s[i]);
    // console.log(s[s.lastIndexOf(s[i])]);
    let substring = ""
    // substring = s.substring(i, s.lastIndexOf(s[i]))
    // deals with element first lastIndexOf grabbing the wrong letter
    // if (i === 0) {
      substring = s.substring(i, s.lastIndexOf(s[i])-1)
      // substring = s.substring(i, s.lastIndexOf(s[i])+1)
      console.log(substring);
    // } else {
      // console.log(s[i]);
      // substring = s.substring(i, s.lastIndexOf(s[i])+1)
      // console.log("out of conditional" + s.lastIndexOf(s[i]));
      if (isPalindrome(substring)) {
        combos.push(substring)
      }
    // }

    // console.log("last indy: "+s[s.lastIndexOf(s[i])]);
    // console.log(substring);
    // console.log(s.substring(i, s.lastIndexOf(s[i])+1));

    // }
    // console.log(s.indexOf(s[i]));
    // console.log(s.lastIndexOf(s[i]));
  }
  let combined = substrings.concat(combos)
  // if (combined[combined.length] === '') {
  //   combined.pop()
  // }
  let removeNull = combined.filter( (a) => a != '')
  // return combos
  return removeNull
  // return removeNull.length
}

function isPalindrome(s) {
  if (s.length > 1) {
    return s.split('').reverse().join('') === s
  } else {
    return true
  }
}

console.log(substrCount(8, "mnonopoo"));
// console.log(substrCount(5, "asasd"));
// console.log(substrCount(7, "abcbaba"));
// console.log(substrCount(4, "aaaa"));
// console.log(substrCount(7, "abcbaba"));

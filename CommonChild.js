function commonChild(s1, s2) {
  // let s1Count = {}
  // let s2Count = {}
  //
  // for (var i = 0; i < s1.length; i++) {
  //   if (s1Count[s1[i]] || s2Count[s2[i]]) {
  //     s1Count[s1[i]]++
  //     s2Count[s2[i]]++
  //   } else {
  //     s1Count[s1[i]] = 1
  //     s2Count[s2[i]] = 1
  //   }
  // }
  //
  // let s1Keys = Object.keys(s1Count)
  // let s2Keys = Object.keys(s2Count)
  // console.log(s1Keys);
  // console.log(s2Keys);
  //
  // console.log(s1Count);
  // console.log(s2Count);

  let counter = {};
  let total = 0;
  let arrA = s1.split('')
  let arrB = s2.split('')

  arrA.forEach(char => {
    if (counter[char]) {
      counter[char] = counter[char]
    } else {
      counter[char] = 0
    }
    counter[char]++;
  })

  arrB.forEach(char => {
    if (counter[char]) {
      counter[char] = counter[char]
    } else {
      counter[char] = 0
    }
    counter[char]--;
  })

  console.log(counter);
  for (var i = 0; i < counter.length; i++) {
    for (var x = 0; x < arrA.length; x++) {
      arrA[x]
    }
    for (var y = 0; y < arrB.length; y++) {
      arrB[y]
    }
  }
  Object.keys(counter).forEach(k => {
    if (counter[k] !== 0) {
        total += Math.abs(counter[k]);
    }
  })
}

console.log(commonChild("ABCD", "ABDC") + ": 3");
console.log(commonChild("HARRY", "SALLY") + ": 2");
// console.log(commonChild("AA", "BB") + ": 0");
// console.log(commonChild("SHINCHAN", "NOHARAAA") + ": 3");
// console.log(commonChild("ABCDEF", "FBDAMN") + ": 2");

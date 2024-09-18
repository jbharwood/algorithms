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

  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) return true;
    }
  }

//     // for 
//       // if s2.subtring(s1[i])
//       // return true

// for (let i = 0; i < s1.length; i++) {
//     // console.log(s2.search(s1[i]) === 1)
//     if (s2.search(s2.search(s1[i]) === 1))  {
//         return true
//     }
// }

return false


//   let counter = {};
//   let total = 0;
//   let arrA = s1.split('')
//   let arrB = s2.split('')

//   arrA.forEach(char => {
//     if (counter[char]) {
//       counter[char] = counter[char]
//     } else {
//       counter[char] = 0
//     }
//     counter[char]++;
//     // counter[char] = counter[char] ? counter[char] + 1 : 1
//   })

//   arrB.forEach(char => {
//     if (counter[char]) {
//       counter[char] = counter[char]
//     } else {
//       counter[char] = 0
//     }
//     counter[char]--;
//     // counter[char] = counter[char] ? counter[char] - 1 : counter[char]
//   })

//   console.log(counter);
//   // for (var i = 0; i < counter.length; i++) {
//   //   for (var x = 0; x < arrA.length; x++) {
//   //     arrA[x]
//   //   }
//   //   for (var y = 0; y < arrB.length; y++) {
//   //     arrB[y]
//   //   }
//   // }
//   Object.keys(counter).forEach(k => {
//     if (counter[k] === 0) {
//         return true
//     }
//   })

//   return false;
}

console.log(commonChild("ABCD", "ABDC") + ": 4");
console.log(commonChild("HARRY", "SALLY") + ": 2");
console.log(commonChild("AA", "BB") + ": 0");
// console.log(commonChild("SHINCHAN", "NOHARAAA") + ": 3");
// console.log(commonChild("ABCDEF", "FBDAMN") + ": 2");


// # Given two strings, determine if they share a common substring. A substring may be as small as one character.

// # * Example
// # s1 = "and"
// # s2 = "art"

// # These share the common substring a.

// # s1 = "be"
// # s2 = "cat"

// # These do not share a substring.

// # * Function Description

// # Complete the function twoStrings in the editor below.

// # twoStrings has the following parameter(s):

// # string s1: a string
// # string s2: another string

// # * Returns

// # string: either YES or NO

// # * Sample Input

// # hello
// # world

// # hi
// # world

// # * Sample Output

// # YES
// # NO

// # * Explanation

// # We have 2 pairs to check:

// # 1. s="hello", s2="world". The substrings "o" and "l" are common to both strings.
// # 2. s="hi", s2="world". s1 and s2 share no common substrings.

// def twoStrings(s1, s2)
//   let string1Count = {}
//   let string2Count = {}

//   for (let i = 0; i < s1.length;  i++) {
//     string1Count[i] = string1Count[i] ? string1Count[i] =       string1Count[i] + 1 : 1
//   }

//   for (let i = 0; i < s2.length;  i++) {
//     string2Count[i] = string2Count[i] ? string2Count[i] = string2Count[i] + 1 : 1
//   }

//   for (let i = 0; i < string1Count.length;  i++) {
//     if (string2Count[string1Count[i]] !== null) {
//       return true
//     }
//   }

//     // iterate s1
//     // for 
//       // if s2.subtring(s1[i])
//       // return true

//     return false
// end

// s1 = 'hello'
// s2 = 'world' # expected YES
// puts "Expected: YES - Result: #{twoStrings(s1, s2)}"
// s1 = 'hi'
// s2 = 'world' # expected NO
// puts "Expected: NO - Result: #{twoStrings(s1, s2)}"

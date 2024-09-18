//hackerrank
function makeAnagram(a, b) {
  let counterA = {};
  let counterB = {};
  let arrA = a.split('')
  let arrB = b.split('')

  arrA.forEach(char => counterA[char] ? counterA[char]++ : counterA[char] = 1)
  arrB.forEach(char => counterB[char] ? counterB[char]++ : counterB[char] = 1)

  let anagram = true
  Object.keys(counterA).forEach(k => {
    if (counterA[k] !== counterB[k]) {
      anagram = false
    }
  })
  return anagram
}

console.log(makeAnagram("abc", "cab"));
console.log(makeAnagram("cdex", "abcx"));
console.log(makeAnagram("cde", "abc"));
console.log(makeAnagram("fcrxzwscanmligyxyvym", "jxwtrhvujlmrpdoqbisbwhmgpmeoke"));

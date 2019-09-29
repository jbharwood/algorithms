//hackerrank
function makeAnagram(a, b) {
  let counter = {};
  let total = 0;
  let arrA = a.split('')
  let arrB = b.split('')

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
  Object.keys(counter).forEach(k => {
    if (counter[k] !== 0) {
        total += Math.abs(counter[k]);
    }
  })

  return total;
}

console.log(makeAnagram("cdex", "abcx"));
console.log(makeAnagram("cde", "abc"));
console.log(makeAnagram("fcrxzwscanmligyxyvym", "jxwtrhvujlmrpdoqbisbwhmgpmeoke"));

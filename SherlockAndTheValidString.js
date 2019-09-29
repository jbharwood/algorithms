//hackerrank

function isValid(s) {
  let arr = s.split('')
  let counter = {}
  for (let i = 0; i < s.length; i++) {
    if (counter[s[i]]) {
      counter[s[i]]++
    } else {
      counter[s[i]] = 1
    }
  }

  let prev = counter[Object.keys(counter)[0]]
  let removed = 0
  for (let i = 1; i < Object.keys(counter).length; i++) {
    if (prev === counter[Object.keys(counter)[i]]) {
      prev = counter[Object.keys(counter)[i]]
    } else if (prev !== counter[Object.keys(counter)[i]] &&
        counter[Object.keys(counter)[i]]-1  === prev) {
          //check for if the count is equal to the normal count - 1.
    }
    else if (prev !== counter[Object.keys(counter)[i]] &&
        counter[Object.keys(counter)[i]]-1  === 0) {
          removed++
    } else {
      return "NO"
    }
  }

  if (removed > 1) {
    return "NO"
  }

  return "YES"
}

console.log(isValid("abc"));
console.log(isValid("abcc"));
console.log(isValid("aabbcd"));
console.log(isValid('aabbccddeefghi'));
console.log(isValid('abcdefghhgfedecba'));
console.log(isValid('abcdefghhgfedecbaa'));
console.log(isValid('aabbc')); //yes

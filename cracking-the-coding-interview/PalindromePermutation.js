const s1 = "Tact Coa"
const s2 = "taco cat"

// O(n)
function PalindromePermutation(strA, strB) {
    if (strA.length !== strB.length) return false

    let map = {}

    for (let i = 0; i < strA.length; i++) {
        map[strA[i]]++
    }

    for (let i = 0; i < strB.length; i++) {
        map[strB[i]]--
        if (strB[i] < 0) return false
    }

    return true

    // const counts = {}
    // for (let char of str.toLowerCase()) {
    //     if (char !== ' ') {
    //         counts[char] = counts[char] ? counts[char] += 1 : 1
    //     }
    // }

    // let oddCount = 0
    // for (let x of Object.values(counts)) {
    //     if (x % 2 === 1)
    //         oddCount++

    //     if (oddCount > 1)
    //         return false
    // }
    
    // return true
}
var startTime = performance.now()

console.log(PalindromePermutation(s1, s2))
// console.log(output)

var endTime = performance.now()

// console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)

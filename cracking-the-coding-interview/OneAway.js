// O(n)
// different than book but simpler
function OneAway(strA, strB) {
    let map = {}

    for (let i = 0; i < strA.length; i++) {
        map[strA[i]] = map[strA[i]] ? map[strA[i]] + 1 : 1
    }

    let isNaNCount = 0
    for (let i = 0; i < strB.length; i++) {
        map[strB[i]]--
        if (isNaN(map[strB[i]])) isNaNCount++
        if (isNaNCount > 1) return false
    }

    console.log(map)

    return true
}

var startTime = performance.now()

console.log(OneAway('pale', 'ple'), true);
console.log(OneAway('pales', 'pale'), true);
console.log(OneAway('pale', 'bale'), true);
console.log(OneAway('pale', 'bake'), false);

var endTime = performance.now()

// console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)

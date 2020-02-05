var subtractProductAndSum = function(n) {
    let str = n.toString()
    let product = 1
    let sum = 0
    for (let i = 0; i < str.length; i++) {
        product *= parseInt(str[i])
        sum += parseInt(str[i])
    }
    return product - sum
};

console.log(subtractProductAndSum(234));
console.log(subtractProductAndSum(4421));


// Example 1:
//
// Input: n = 234
// Output: 15
// Explanation:
// Product of digits = 2 * 3 * 4 = 24
// Sum of digits = 2 + 3 + 4 = 9
// Result = 24 - 9 = 15
// Example 2:
//
// Input: n = 4421
// Output: 21
// Explanation:
// Product of digits = 4 * 4 * 2 * 1 = 32
// Sum of digits = 4 + 4 + 2 + 1 = 11
// Result = 32 - 11 = 21

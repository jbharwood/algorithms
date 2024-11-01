function nonRepeatingCharSubstring(str) {
    let temp = ""
    let arr = []
    let hash = {}

    for (let i = 0; i < str.length; i++) {
        hash[str[i]] = (hash[str[i]] || 0) + 1
        if (hash[str[i]] > 1) {
            arr.push(temp)
            temp = str[i]
            hash = {}
        } else {
            temp += str[i]
        }
    }

    arr.push(temp)

    let max = ""

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > max.length) {
            max = arr[i]
        }
    }
    
    return max
}

console.log(nonRepeatingCharSubstring("ABCDDDEFGHI"))
console.log(nonRepeatingCharSubstring("ABCAAB"))
console.log(nonRepeatingCharSubstring("ABCDDAV"))


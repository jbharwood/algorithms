const s = "Mr John Smith   "
const count = 13

const output = s.trim().replaceAll(' ', "%20")

// O(n)
function urlify(str, trueLength) {
    let url = str.split('')
    let spaceCount = 0;
    for (let i = 0; i < trueLength; i++) {
        if (str[i] === ' ') spaceCount++
    }

    let index = trueLength + spaceCount * 2;
    for (let i = trueLength - 1; i >= 0; i--) {
        if (url[i] === ' ') {
            url[index - 1] = '0';
            url[index - 2] = '2';
            url[index - 3] = '%';
            index -= 3
        } else {
            url[index - 1] = url[i]
            index--
        }
    }

    return url.join('');
}
var startTime = performance.now()

console.log(urlify(s, count))
// console.log(output)

var endTime = performance.now()

console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)

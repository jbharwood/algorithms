var fizzBuzz = function(n) {
    let newArr = []
    let x = 0
    for(let i = 0; i < n; i++) {
        x += 1
        if (x % 3 === 0 && x % 5 !== 0) {
            newArr.push("Fizz")
        } else if (x % 5 === 0 && x % 3 !== 0) {
            newArr.push("Buzz")
        } else if (x % 5 === 0 && x % 3 === 0) {
            newArr.push("FizzBuzz")
        } else {
            newArr.push(x.toString())
        }
    }
    return newArr
};

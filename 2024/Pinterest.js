// Make balanced array

// func(pins, 2)

// Pins = [
//     { id: 1, height: 300 },
//     { id: 2, height: 350 },
//     { id: 3, height: 100 },
//     { id: 4, height: 200 },
// ]
// N = 2

// Output = [
//     [
//         { id: 1, height: 300 },
//         { id: 3, height: 100 },
//     ],
//     [
//         { id: 2, height: 350 },
//         { id: 4, height: 200 },
//     ],
// ]

const func = (pins, n) => {
    let counts = {}
    let arr = []

    for (let i = 0; i < n; i++) {
        // counts[i] = 0
        arr.push([])
    }

    for (let i = 0; i < pins.length; i++) {
        if (counts[pins[i] < counts[pins[i]]])
    }
}


let pins = [
    { id: 1, height: 300 },
    { id: 2, height: 350 },
    { id: 3, height: 100 },
    { id: 4, height: 200 },
]

console.log(func(pins, 2))
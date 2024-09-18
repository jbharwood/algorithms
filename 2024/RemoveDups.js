const LinkedList = require("./utils/LinkedListX");

// 
function RemoveDups(list) {
    const set = new Set()
    let cur = list.head
    let prev = null

    while (cur) {
        if(set.has(cur.value)) {
            let elem = cur
            prev.next = cur.next
            cur = cur.next
            elem.next = null
        } else {
            set.add(cur.value)
            prev = cur
            cur = cur.next
        }
    }

    return list
}

var startTime = performance.now()

let list = new LinkedList();
for (let elem of [1, 5, 1, 6, 8, 6, 8, 8, 8, 8]) {
    list.append(elem);
}

RemoveDups(list);

// console.log(list)

console.log(list._toArray()); // [1, 5, 6, 8]
// console.log(RemoveDups('pale', 'ple'), true);

var endTime = performance.now()

// console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)

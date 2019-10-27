// const login = () => {
//   console.log("Enter Username:");
// }
//
// const password = () => {
//   console.log("Enter Password:");
// }
//
// const mainMenu = () => {
//   login()
//   password()
// }
//
// const playGame = () => {
//   console.log("Start Game");
// }
//
// const startGame = () => {
//   mainMenu()
//   playGame()
// }
//
// const mainMenu = () => {
//   console.log("Enter Username:");
//   console.log("Enter Password:");
// }
//
// console.log(mainMenu());

// const sandwiches = ['turkey', 'ham'];
// const sandwichMaker = {
//   makeSandwich(sandwich) {
//     if (sandwiches.indexOf(sandwich) > -1) {
//       console.log('You made a sandwich!');
//     } else {
//       console.log(`You don't get a sandwich!`);
//     }
//   },
//   addSandwich(sandwich) {
//     sandwiches.push(sandwich);
//   },
// };
//
// const openDeli = () => {
//   sandwichMaker.makeSandwich("turkey")
//   sandwichMaker.addSandwich("roast beef")
//   return sandwiches
// }
// console.log(openDeli());
//
// const iceCreams = ['vanilla', 'chocolate'];
// const iceCreamMaker = {
//   makeIceCream(iceCream) {
//     if (iceCreams.indexOf(iceCream) > -1) {
//       console.log('You made a iceCream!');
//     } else {
//       console.log(`You don't get a iceCream!`);
//     }
//   },
//   addIceCream(iceCream) {
//     iceCreams.push(iceCream);
//   },
// };
// const openIceCreamStore = () => {
//   iceCreams.addIceCream("rocky road")
//   iceCreamMaker.makeIceCream("vanilla")
//   return iceCreams
// }

let stock = [];
const itemMaker = {
  makeItem(type, item) {
    if (stock.indexOf(item) > -1) {
      console.log(`You made a ${type}!`);
    } else {
      console.log(`You don't get a ${type}!`);
    }
  },
  addItem(item) {
    stock.push(item);
  },
};

const openIceCreamStore = () => {
  stock = []
  itemMaker.addItem("vanilla")
  itemMaker.addItem("chocolate")
  itemMaker.addItem("rocky road")
  itemMaker.makeItem("ice cream", "vanilla")
  return stock
}

const openDeli = () => {
  stock = []
  itemMaker.addItem("turkey")
  itemMaker.addItem("ham")
  itemMaker.addItem("roast beef")
  itemMaker.makeItem("sandwich", "turkey")
  return stock
}

console.log(openIceCreamStore());
console.log(openDeli());

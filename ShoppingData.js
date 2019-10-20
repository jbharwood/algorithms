function generateFiles(input_file) {
    // Write your code here

    let obj2 = {name: "", brand: 0}
    let output1 = []
    let output2 = []
    let csv1 = []
    let csv2 = []
    let lines = input_file.split(/\r?\n/)
    let commaSplit = []
    for (let i = 0; i < lines.length; i++) {
      commaSplit.push(lines[i].split(","))
    }
    let shoeTotal = 0
    let knifeTotal = 0
    let shoeLength = 0
    let knifeLength = 0
    for (let row in commaSplit) {
      console.log(commaSplit[row]);
      if (commaSplit[row][2] === 'Intelligent Copper Knife') {
        knifeTotal += parseInt(commaSplit[row][3])
        knifeLength++
      } else {
        shoeTotal += parseInt(commaSplit[row][3])
        shoeLength++
      }
    }
    let shoeAverage = shoeTotal / shoeLength;
    let knifeAverage = knifeTotal / knifeLength;
    console.log(shoeAverage);
    console.log(knifeAverage);
    // let obj1 = {name: commaSplit[2], avg: commaSplit[3]}
    // csv1.push(obj1)
    // if (output1[0] !== commaSplit[2]) {
    //   output1.push(commaSplit[2])
    // }
    // console.log(output1);
    // return csv1
}
let i1 = "ID944806,Willard Vista,Intelligent Copper Knife,3,Hilll-Gorczany\nID644525,Roger Centers,Intelligent Copper Knife,1,Kunze-Bernhard\nID348204,Roger Centers,Small Granite Shoes,4,Rowe and Legros\nID710139,Roger Centers,Intelligent Copper Knife,4,Hilll-Gorczany\nID710139,Roger Centers,Intelligent Copper Knife,4,Hilll-Gorczany\nID426632,Willa Hollow,Intelligent Copper Knife,4,Hilll-Gorczany"
console.log(i1);
console.log(generateFiles(i1));
// csv1: Intelligent Copper Knife,2.4\nSmall Granite Shoes,0.8
// csv2: Intelligent Copper Knife,Hilll-Gorczany\nSmall Granite Shoes,Rowe and Legros

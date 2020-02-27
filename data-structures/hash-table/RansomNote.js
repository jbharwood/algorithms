//hackerrank interview prep kit

function checkMagazine(magazine, note) {
  var map = { };
  var replicable = true;
  for ( var i of magazine ) {
    map[i] = (map[i] || 0) + 1;
  }
  for ( var i of note ) {
    map[i] = (map[i] || 0) - 1;
  }
  for ( var i in map ) {
    if ( map[i] < 0 ) {
      replicable = false;
      break;
    }
  }
  console.log(replicable ? 'Yes' : 'No');
}

// Breaking down the part that is probably confusing some people: (map[i] || 0) + 1
//
// What happens here is: if map[i] has not been initialized, it defaults to zero and then one is added. If it has been
// initialized it simply adds one to its current value. How? Because something || other is a short way of saying if something
// is defined[*] use it, otherwise use other.
//
// So in short and plain English, what this loop does is it goes through all the words in magazine and keeps count of how many
// of them there were using the object called map.
//
// After that, the code loops through the ransom note and subtracts one for each element, again initiating at 0 if needed
// (ransom has been used as name here instead of note in the example):

// Sample Input 0
//
// give me one grand today night
// give one grand today
// Sample Output 0
//
// Yes
// Sample Input 1
//
// two times three is not four
// two times two is four
// Sample Output 1
//
// No
// Explanation 1
//
// 'two' only occurs once in the magazine.
//
// Sample Input 2
//
// ive got a lovely bunch of coconuts
// ive got some coconuts
// Sample Output 2
//
// No
// Explanation 2
//
// Harold's magazine is missing the word .

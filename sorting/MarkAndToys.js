//hackerrank interview prep kit

function maximumToys(prices, k) {
  let sum = 0;
  let sorter = prices.sort((a, b) => a - b);
  let counter = 0

  for (var i = 0; i < sorter.length; i++){
    if (sorter[i] < k){
      sum += sorter[i]
      if (sum <= k){
        counter++
      } else {
				break;
			}
    }
  }
  console.log(counter)
}

// prices = [1,2,3,4] k = 7 he'd pick [1,2,3] for 6 dollars. answer = 3 items

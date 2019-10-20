var subarraySum = function(nums, k) {
    let solution = 0;
    let sum = 0;
    const sumCount = new Map([[0, 1]]);
    console.log(sumCount);
    for (let num of nums) {
        sum += num;
        solution += sumCount.get(sum-k) || 0;

        sumCount.set(sum, (sumCount.get(sum) || 0) + 1);
    }
    console.log(sumCount);
    return solution;
};

// console.log(subarraySum([1,1,1], 2));
console.log(subarraySum([1,2,3], 3));
console.log(subarraySum([100,1,2,3,4], 6));

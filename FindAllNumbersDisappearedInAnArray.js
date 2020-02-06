var findDisappearedNumbers = function(nums) {
  let obj = {};
	let dis = [];
	for (let v of nums) {
    if (!obj[v]) {
      obj[v] = v;
    }
	}
	for (let i = 1; i <= nums.length; i++) {
		if (!obj[i]) dis.push(i);
	}
	return dis;
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));

// Example:
//
// Input:
// [4,3,2,7,8,2,3,1]
//
// Output:
// [5,6]

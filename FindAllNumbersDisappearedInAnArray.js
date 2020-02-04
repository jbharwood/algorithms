var findDisappearedNumbers = function(nums) {
  let obj = {};
	let arr = [];
	let dis = [];
	for (let v of nums) {
    if (!obj[v]) {
      obj[v] = v;
    } else {
      arr.push(v);
    }
	}
	for (let i = 1; i <= nums.length; i++) {
		if (!obj[i]) dis.push(i);
	}
	return dis;
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));

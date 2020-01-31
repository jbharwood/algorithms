var singleNumber = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    let tmp = nums.pop();
    if(nums.includes(tmp)) {
      nums.unshift(tmp);
      continue;
    }
    return tmp;
  }
};

console.log(singleNumber([2,2,1]));

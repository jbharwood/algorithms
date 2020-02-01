var containsDuplicate = function(nums) {
  const count = {}
  let dupe = false
  nums.forEach(num => count[num] ? dupe = true : count[num] = 1)
  return dupe
};

console.log(containsDuplicate([1,2,3,1]));
console.log(containsDuplicate([1,2,3,4]));
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));

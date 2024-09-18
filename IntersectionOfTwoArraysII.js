var intersect = function(nums1, nums2) {
  const hash = {}, ar = []

  nums2.forEach(num => {
    hash[num] ? hash[num]++ : hash[num] = 1
  })

  for (let i = 0; i < nums1.length; i++) {
    if (hash[nums1[i]] > 0) {
      ar.push(nums1[i])
      hash[nums1[i]]--
    }
  }
  return ar
};

console.log(intersect([1,2,2,1], [2,2]));
console.log(intersect([4,9,5], [9,4,9,8,4]));
console.log(intersect([1], [1]));
console.log(intersect([1,2], [1,1]));

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
//
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]

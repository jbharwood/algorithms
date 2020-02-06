var reverseWords = function(s) {
    let arr = s.split(" ")
    let ans = []
    console.log(arr);
    arr.forEach(a => ans.push(a.split("").reverse().join("")))
    return ans.join(" ")
};

console.log(reverseWords("Let's take LeetCode contest"));

// Example 1:
// Input: "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

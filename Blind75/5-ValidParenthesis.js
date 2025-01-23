class Solution {
  isValid(s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
      if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
        stack.push(s[i]);
      } else {
        if (!stack.length) return false;

        let top = stack.pop();

        if (top === "(" && s[i] !== ")") return false;
        if (top === "[" && s[i] !== "]") return false;
        if (top === "{" && s[i] !== "}") return false;
      }
    }

    return !stack.length;
  }
}

// Test
let solution = new Solution();
console.log(solution.isValid("(]")); // false
console.log(solution.isValid("{[]}")); // true
console.log(solution.isValid("[{]}")); // false

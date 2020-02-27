//hackerrank interview preperation kit

// A bracket is considered to be any one of the following characters: (, ), {, }, [, or ].
//
// Two brackets are considered to be a matched pair if the an opening bracket (i.e., (, [, or {) occurs
// to the left of a closing bracket (i.e., ), ], or }) of the exact same type. There are three types of matched pairs
// of brackets: [], {}, and ().
//
// A matching pair of brackets is not balanced if the set of brackets it encloses are not matched. For example,
// {[(])} is not balanced because the contents in between { and } are not balanced. The pair of square brackets encloses a 
// single, unbalanced opening bracket, (, and the pair of parentheses encloses a single, unbalanced closing square bracket, ].
//
// By this logic, we say a sequence of brackets is balanced if the following conditions are met:
//
// It contains no unmatched brackets.
// The subset of brackets enclosed within the confines of a matched pair of brackets is also a matched pair of brackets.

function isBalanced(s) {
  var result = 'YES';
  var stack = [];
  s.split('').forEach(function(val) {
    switch(val) {
      case '{':
        stack.push('}');
        break;
      case '[':
        stack.push(']');
        break;
      case '(':
        stack.push(')');
        break;
      default:
        var test = stack.pop();

        if (val !== test) {
          result = 'NO';
        }
    }
  })
  if (stack.length) {
    result = 'NO';
  }
  return result;
}

console.log(isBalanced("{[()]}"));
console.log(isBalanced("{[(])}"));
console.log(isBalanced("{{[[(())]]}}"));

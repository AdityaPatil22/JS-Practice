// Generate all combinations of balanced parentheses

function generateParentheses(n) {
    const result = [];
  
    function backtrack(str = '', open = 0, close = 0) {
      if (str.length === n * 2) {
        result.push(str);
        return;
      }
  
      if (open < n) {
        backtrack(str + '(', open + 1, close);
      }
  
      if (close < open) {
        backtrack(str + ')', open, close + 1);
      }
    }
  
    backtrack();
    return result;
  }
  

console.log(generateParentheses(3));

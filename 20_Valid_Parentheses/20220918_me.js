/**
 Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.


Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 */

var isValid = function (s) {
  const arr = [];
  const brackets = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (let x of s) {
    if (brackets.hasOwnProperty(x)) {
      arr.push(x);
    } else {
      if (!arr.length) return false; // 닫는 괄호가 먼저 오는 경우
      if (brackets[arr[arr.length - 1]] === x) {
        arr.pop();
      } else {
        return false; // 맞지 않는 괄호가 오는 경우
      }
    }
  }

  return !arr.length;
};

console.log(isValid('(])'));

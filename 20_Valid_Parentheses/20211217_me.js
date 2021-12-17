const isValid = function (s) {
  let stack = [];

  let parentheses = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (let x of s) {
    if (parentheses.hasOwnProperty(x)) {
      stack.push(x);
    } else {
      if (parentheses[stack[stack.length - 1]] !== x) {
        return false;
      } else {
        stack.pop();
      }
    }
  }

  if (stack.length > 0) return false;

  return true;
};

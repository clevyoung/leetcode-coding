/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

const strStr = function (haystack, needle) {
  if (haystack.length === 0 && needle.length === 0) return 0;
  return haystack.indexOf(needle);
};

/**
 * Runtime: 116 ms, faster than 39.80% of JavaScript online submissions for Implement strStr().
Memory Usage: 39.9 MB, less than 80.79% of JavaScript online submissions for Implement strStr().
 */

console.log(strStr('hello', 'll'));
console.log(strStr('', ''));
console.log(strStr('aaa', 'ba'));

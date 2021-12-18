/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const text = s.trim();

  const arr = text.split(' ');

  return arr[arr.length - 1].length;
};

console.log(lengthOfLastWord('Hello World'));
console.log(lengthOfLastWord('   fly me   to   the moon  '));

/**
 * Runtime: 72 ms, faster than 74.40% of JavaScript online submissions for Length of Last Word.
 * Memory Usage: 39.1 MB, less than 28.66% of JavaScript online submissions for Length of Last Word.

 */

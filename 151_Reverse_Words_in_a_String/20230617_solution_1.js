/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  // Trim leading and trailing spaces and split the string into an array of words
  var words = s.trim().split(/\s+/);

  // Reverse the order of the words in the array
  words.reverse();

  // Join the words back into a string, separated by a single space
  return words.join(' ');
};

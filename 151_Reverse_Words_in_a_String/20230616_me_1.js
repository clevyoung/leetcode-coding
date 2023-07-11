/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  // trim
  // reverse s
  // loop through s
  // if space is subsequent, remove

  const reversedArr = s.trim().split(' ').reverse();
  let i = 0;
  let spaceCount = 0;
  let reversedWords = '';

  while (i < reversedArr.length) {
    if (reversedArr[i]) {
      reversedWords += reversedArr[i];
      spaceCount = 0;
    } else {
      if (spaceCount === 0) {
        reversedWords += reversedArr[i];
        spaceCount++;
      }
    }
    i++;
  }

  return reversedWords;
};

console.log(reverseWords('  hello world  '));

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
  let reversedWords = '';

  console.log(reversedArr);

  while (i < reversedArr.length) {
    if (reversedArr[i]) {
      reversedWords += reversedArr[i] + ' ';
    }

    i++;
  }

  return reversedWords.trim();
};

console.log(reverseWords('  hello world  '));

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  /**
         ['a', '', 'good', '', ]
          a good   example
       */
  const sArr = s.split(' ');
  let reverseWord = '';

  for (let i = sArr.length - 1; i >= 0; i--) {
    if (sArr[i] === '') {
      continue;
    }

    reverseWord += sArr[i] + ' ';
  }

  return reverseWord.trim();
};

console.log(reverseWords('a good   example'));

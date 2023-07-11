/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  /**
       ['a', '', 'good', '', ]
        a good   example
     */
  const sArr = s.trim().split(' ');
  const reversedArr = [];

  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] === '') {
      continue;
    }

    reversedArr.push(sArr[i]);
  }

  return reversedArr.reverse().join(' ');
};

console.log(reverseWords('a good   example'));

/**
 * https://www.youtube.com/watch?v=NRfHktxtcmA
 * Youtube 솔루션
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

const strStr = function (haystack, needle) {
  if (!needle) {
    return 0;
  }

  while (
    haystack.substring(i, needle.length + i) !== needle &&
    i <= haystack.length
  ) {
    i++;
  }

  return i > haystack.length ? -1 : i;
};

console.log(strStr('hello', 'll'));
console.log(strStr('', ''));
console.log(strStr('aaa', 'ba'));

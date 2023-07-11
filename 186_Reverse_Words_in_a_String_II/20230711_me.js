/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function (s) {
  s = s.reverse();
  s.push(' ');
  let p1 = 0;
  let p2 = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      p2 = i - 1;
      while (p1 < p2) {
        let temp = s[p1];
        s[p1] = s[p2];
        s[p2] = temp;
        p1++;
        p2--;
      }
      p1 = i + 1;
    }
  }
  s.pop();
  return s;
};
console.log(
  reverseWords([
    't',
    'h',
    'e',
    ' ',
    's',
    'k',
    'y',
    ' ',
    'i',
    's',
    ' ',
    'b',
    'l',
    'u',
    'e',
  ])
);

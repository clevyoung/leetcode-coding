/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let minWindowSize = Number.MAX_SAFE_INTEGER;
  const tMap = new Map();
  const seenMap = new Map();
  let output = '';

  for (let x of t) {
    tMap.set(x, (tMap.get(x) || 0) + 1);
  }

  let left = 0;
  let right = 0;
  let flag = 0;

  while (right < s.length) {
    const curLetter = s[right];
    if (tMap.has(curLetter)) {
      seenMap.set(curLetter, (seenMap.get(curLetter) || 0) + 1);
      if (tMap.get(curLetter) === seenMap.get(curLetter)) {
        flag++;
      }
    }

    while (left <= right && flag === t.length) {
      if (right - left + 1 < minWindowSize) {
        minWindowSize = right - left + 1;
        output = s.slice(left, right + 1);
      }

      if (tMap.has(s[left])) {
        seenMap.set(s[left], seenMap.get(s[left]) - 1);
        if (seenMap.get(s[left]) < tMap.get(s[left])) {
          flag--;
        }
      }

      left++;
    }
    right++;
  }

  return minWindowSize === Number.MAX_SAFE_INTEGER ? '' : output;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let left = 0;
  let right = 0;
  const targetMap = new Map();
  for (let x of t) {
    targetMap.set(x, (targetMap.get(x) || 0) + 1);
  }
  // s에서 발견된 t의 character를 담아두는 곳
  const seenMap = new Map();
  let minWindowSize = Number.MAX_SAFE_INTEGER;
  let minString = '';
  const required = targetMap.size;
  let count = 0;

  while (r < s.length) {
    const curChar = s[right];
    if (targetMap.has(curChar)) {
      seenMap.set(curChar, (seenMap.get(curChar) || 0) + 1);
      if (targetMap.get(curChar) === seenMap.get(curChar)) {
        count++;
      }
    }

    while (count === required) {
      const curWindowSize = right - left + 1;
      if (curWindowSize < minWindowSize) {
        minWindowSize = curWindowSize;
        minString = s.slice(left, right + 1);
      }

      const leftChar = s[left];
      if (targetMap.has(leftChar)) {
        seenMap.set(leftChar, seenMap.get(leftChar) - 1);
        if (seenMap.get(leftChar) < targetMap.get(leftChar)) {
          count--;
        }
      }

      left++;
    }

    right++;
  }

  return minString;
};

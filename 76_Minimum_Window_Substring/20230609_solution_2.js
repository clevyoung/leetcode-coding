function minWindow(s, t) {
  // Create a character frequency map for the target string
  const targetMap = new Map();
  for (let char of t) {
    targetMap.set(char, (targetMap.get(char) || 0) + 1);
  }

  let left = 0; // left pointer of the sliding window
  let count = t.length; // count of remaining characters to be found
  let minLength = Infinity; // minimum window length found so far
  let minWindowStart = 0; // starting index of the minimum window
  let windowMap = new Map(); // character frequency map for the current window

  for (let right = 0; right < s.length; right++) {
    let char = s[right];

    // Decrement the count and update the window map
    if (targetMap.has(char)) {
      windowMap.set(char, (windowMap.get(char) || 0) + 1);
      if (windowMap.get(char) <= targetMap.get(char)) {
        count--;
      }
    }

    // If all characters are found, try to minimize the window
    while (count === 0) {
      let currentLength = right - left + 1;
      if (currentLength < minLength) {
        minLength = currentLength;
        minWindowStart = left;
      }

      let leftChar = s[left];
      if (targetMap.has(leftChar)) {
        windowMap.set(leftChar, windowMap.get(leftChar) - 1);
        if (windowMap.get(leftChar) < targetMap.get(leftChar)) {
          count++;
        }
      }

      left++;
    }
  }

  // If no minimum window found, return an empty string
  if (minLength === Infinity) {
    return '';
  }

  return s.substr(minWindowStart, minLength);
}

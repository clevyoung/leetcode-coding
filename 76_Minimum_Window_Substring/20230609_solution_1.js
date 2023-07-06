var minWindow = function (s, t) {
  const targetMap = new Map();
  const windowMap = new Map();

  // Build the target map with character frequencies
  for (let char of t) {
    targetMap.set(char, (targetMap.get(char) || 0) + 1);
  }

  let left = 0;
  let right = 0;
  let formed = 0; // Number of characters formed the desired window
  let required = targetMap.size; // Number of unique characters required in the window
  let minLength = Infinity;
  let minSubstring = '';

  while (right < s.length) {
    const currentChar = s[right];

    // Add the current character to the window map
    windowMap.set(currentChar, (windowMap.get(currentChar) || 0) + 1);

    // If the current character is in the target and its count matches the required count, increment the formed count
    if (
      targetMap.has(currentChar) &&
      targetMap.get(currentChar) === windowMap.get(currentChar)
    ) {
      formed++;
    }

    // Try to minimize the window by moving the left pointer
    while (left <= right && formed === required) {
      const windowSize = right - left + 1;

      // Update the minimum window if necessary
      if (windowSize < minLength) {
        minLength = windowSize;
        minSubstring = s.slice(left, right + 1);
      }

      const leftChar = s[left];

      // Remove the left character from the window map
      windowMap.set(leftChar, windowMap.get(leftChar) - 1);

      // If the left character is in the target and its count is less than the required count, decrement the formed count
      if (
        targetMap.has(leftChar) &&
        windowMap.get(leftChar) < targetMap.get(leftChar)
      ) {
        formed--;
      }

      left++; // Move the left pointer
    }

    right++; // Move the right pointer
  }

  return minSubstring;
};

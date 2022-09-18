/**
 * Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".



Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 */

// 처음에는 내가 잘못 생각했다. 접두사인데

const longestCommonPrefix = function (strs) {
  if (strs.length === 1) return strs[0];

  const combination = [];

  for (let i = 0; i <= strs[0].length; i++) {
    combination.push(strs[0].substring(0, i));
  }

  let longestPrefix = '';

  for (let x = 0; x < combination.length; x++) {
    let strsIndex;
    for (let y = 1; y < strs.length; y++) {
      if (!strs[y].startsWith(combination[x])) {
        break;
      }
      strsIndex = y;
    }
    if (strsIndex === strs.length - 1) {
      if (Math.max(combination[x].length, longestPrefix.length)) {
        longestPrefix = combination[x];
      }
    }
  }

  return longestPrefix;
};

console.log(longestCommonPrefix(['dog', 'racecar', 'car']));

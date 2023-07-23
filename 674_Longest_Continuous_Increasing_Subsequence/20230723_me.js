/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  if (nums.length === 0) return 0;
  let left = 0;
  let longest = 1;

  for (let right = 1; right < nums.length; right++) {
    if (nums[right] > nums[right - 1]) {
      longest = Math.max(longest, right - left + 1);
    } else {
      left = right;
    }
  }

  return longest;
};

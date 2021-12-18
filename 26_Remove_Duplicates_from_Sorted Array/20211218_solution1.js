/**
 * https://www.youtube.com/watch?v=rlfsnRY0S9k
 * Youtube 솔루션 - Two Pointer
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let pointer1 = 0;

  for (let pointer2 = 1; pointer2 < nums.length; pointer2++) {
    if (nums[pointer1] !== nums[pointer2]) {
      pointer1++;
      nums[pointer1] = nums[pointer2];
    }
  }

  return pointer1 + 1;
};

console.log(removeDuplicates([1, 1, 2]));

/**
 * Runtime: 84 ms, faster than 85.45% of JavaScript online submissions for Remove Duplicates from Sorted Array.
 * Memory Usage: 41.5 MB, less than 57.26% of JavaScript online submissions for Remove Duplicates from Sorted Array.
 */

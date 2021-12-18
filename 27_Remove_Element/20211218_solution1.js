/**
 * https://www.youtube.com/watch?v=hCVTvyO6WUk
 * Youtube 솔루션 - Two Pointer
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let pointer1 = 0;

  for (let pointer2 = 0; pointer2 < nums.length; pointer2++) {
    if (nums[pointer2] !== val) {
      nums[pointer1] = nums[pointer2];
      pointer1++;
    }
  }
  return pointer1;
};

console.log(removeElement([1, 2, 2, 3, 4], 2));

/**
 * Runtime: 72 ms, faster than 80.38% of JavaScript online submissions for Remove Element.
 * Memory Usage: 39.1 MB, less than 34.43% of JavaScript online submissions for Remove Element.
 */

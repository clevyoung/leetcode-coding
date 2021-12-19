/**
 * https://www.youtube.com/watch?v=30vFDu8Or1M&t=62s
 * Youtube 솔루션 - Binary search
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const searchInsert = function (nums, target) {
  let left = 0,
    right = nums.length - 1;

  if (target < nums[left]) return 0;
  if (target > nums[right]) return nums.length;

  while (left < right) {
    // let mid = Math.floor((left + right) / 2);
    let mid = (left + right) >> 1;
    if (target === nums[mid]) return mid;
    else if (target < nums[mid]) right = mid - 1;
    else left = mid + 1;
  }

  return left;
};

console.log(searchInsert([1, 2, 5, 6, 9, 11, 12, 14], 7));
console.log(searchInsert([1, 3, 5, 7], 0));
console.log(searchInsert([1, 3, 5, 6], 7));

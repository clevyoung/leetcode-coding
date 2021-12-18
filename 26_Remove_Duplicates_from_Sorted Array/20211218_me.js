/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  let mapObj = {};

  for (let i = 0; i < nums.length; i++) {
    if (!mapObj.hasOwnProperty(nums[i])) {
      mapObj[nums[i]] = i;
    } else {
      nums.splice(i, 1);
      i--;
    }
  }

  return nums.length;
};

console.log(removeDuplicates([1, 1, 2]));

/**
 * Runtime: 152 ms, faster than 23.56% of JavaScript online submissions for Remove Duplicates from Sorted Array.
 * Memory Usage: 43.2 MB, less than 7.61% of JavaScript online submissions for Remove Duplicates from Sorted Array.
 */

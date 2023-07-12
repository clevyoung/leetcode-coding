/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let searchIndex = Math.floor(nums.length / 2);
  if (target < nums[0]) {
    return 0;
  }

  if (target > nums[nums.length - 1]) {
    return nums.length;
  }

  while (true) {
    if (nums[searchIndex] === target) {
      return searchIndex;
    } else if (nums[searchIndex] > target) {
      if (nums[searchIndex - 1] < target) {
        return searchIndex;
      }
      searchIndex--;
    } else {
      if (nums[searchIndex + 1] > target) {
        return searchIndex + 1;
      }
      searchIndex++;
    }
  }
};

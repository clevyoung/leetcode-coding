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

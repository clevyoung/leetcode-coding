/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  nums.sort();
  console.log(nums);
  const valFirstIdx = nums.indexOf(val);
  console.log(valFirstIdx);

  const valLastIdx = nums.lastIndexOf(val);
  console.log(valLastIdx);
  for (let i = valFirstIdx; i <= valLastIdx; i++) {
    // if (nums[i + valLastIdx - valFirstIdx + 1]) {
    //   nums[i] = nums[i + valLastIdx - valFirstIdx + 1];
    // } else {
    //   nums[i] = nums[i + valLastIdx - valFirstIdx];
    // }
  }

  console.log(nums);
  return valLastIdx;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 7, 7, 8, 6, 2], 2));

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let count = k;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (count === 0) {
      break;
    }
    nums.unshift(nums.pop());
    i++;
    count--;
  }

  console.log(nums);
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotate([-1, -100, 3, 99], 2));

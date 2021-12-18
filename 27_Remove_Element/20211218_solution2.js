/**
 * https://www.youtube.com/watch?v=UPJf-Whg3fM
 * Youtube 솔루션 - 두가지 방법 제시(Splice, Two Pointer)
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  if (!nums) return 0;
  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] === val) {
  //       nums.splice(i, 1);
  //       i--;
  //     }
  //   }
  //   return nums.length;

  let pointer = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[pointer] = nums[i];
      pointer++;
    }
  }

  return pointer;
};

console.log(removeElement([1, 2, 2, 3, 4], 2));

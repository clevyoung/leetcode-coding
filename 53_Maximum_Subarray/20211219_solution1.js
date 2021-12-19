/**
 * https://www.youtube.com/watch?v=WdK1Uhsza_I
 * Youtube 솔루션
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

const maxSubArray = function (nums) {
  let solution = nums[0];

  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    solution = Math.max(solution, nums[i]);
  }

  return solution;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([-2, 1]));
console.log(maxSubArray([-2, -1]));

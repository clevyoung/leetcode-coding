/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  if (nums.length === 1) return nums[0];

  let sum = 0;
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j];
      if (max < sum) max = sum;
    }

    if (max < sum) max = sum;
    sum = 0;
  }

  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([-2, 1]));
console.log(maxSubArray([-2, -1]));

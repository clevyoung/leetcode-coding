/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const n = nums.length;
  const dy = new Array(n);

  dy[0] = nums[0];
  dy[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    dy[i] = Math.max(dy[i - 2] + nums[i], dy[i - 1]);
    // dy[2] = Math.max(dy[0]+nums[2], dy[1])  // 4
    // dy[3] = Math.max(dy[1]+nums[3], dy[2]) // 2+1 , 4
  }

  return dy[n - 1];
};

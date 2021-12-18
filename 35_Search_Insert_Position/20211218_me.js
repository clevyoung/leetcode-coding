/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 처음에 고민이었던 부분은 만약 target이 명확하게 존재한다고 했을 때 반드시 target은 찾아질텐데 만약 target이 존재하지 않을 경우 어떻게 target이 들어갈 index를 찾는지
var searchInsert = function (nums, target) {
  if (nums[nums.length - 1] < target) return nums.length;
  if (nums[0] > target) return 0;

  let index = Math.floor(nums.length / 2);

  while (true) {
    if (nums[index] === target) {
      break;
    } else if (nums[index] > target) {
      index = Math.floor(index / 2);
    } else if (nums[index] < target) {
      index++;
      if (nums[index] > target) break;
    }
  }

  return index;
};

console.log(searchInsert([1, 2, 5, 6, 9, 11, 12, 14], 7));
console.log(searchInsert([1, 3, 5, 7], 0));
console.log(searchInsert([1, 3, 5, 6], 7));

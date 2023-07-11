/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const n = nums.length;
  k = k % n;
  nums.reverse();
  swap(nums, 0, k - 1);
  swap(nums, k, n - 1);

  return nums;
};

function swap(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));

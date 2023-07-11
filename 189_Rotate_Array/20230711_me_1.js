/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // [1,2,3,4,5,6,7]
  // [7,6,5,4,3,2,1]
  // [6,7,1,2,3,4,5]

  /**
      방법 1 array를 아예 뒤집고나서 k를 기준으로 양쪽으로 나눈후 swap한다. 
     */
  k = k % n;
  nums.reverse();
  swap(nums, 0, k - 1);
  swap(nums, k, nums.length - 1);

  return nums;
};

function swap(arr, start, end) {
  let p1 = start;
  let p2 = end;

  while (p1 < p2) {
    const temp = arr[p1];
    arr[p1] = arr[p2];
    arr[p2] = temp;
    p1++;
    p2--;
  }
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));

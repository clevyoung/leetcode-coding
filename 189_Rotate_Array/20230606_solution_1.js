var rotate = function (nums, k) {
  const n = nums.length;
  k = k % n; // normalize k to be within the range of array length
  console.log(k);

  reverse(nums, 0, n - 1); // reverse the entire array
  console.log(nums);
  reverse(nums, 0, k - 1); // reverse the first k elements
  console.log(nums);
  reverse(nums, k, n - 1); // reverse the remaining elements
  console.log(nums);

  function reverse(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]]; // swap elements
      start++;
      end--;
    }
  }
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));

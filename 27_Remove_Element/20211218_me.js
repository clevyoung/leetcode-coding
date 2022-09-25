var removeElement = function (nums, val) {
  // 고민이었던 부분 - for loop를 돌면서 splice메서드를 이용해 특정 원소를 삭제하면 그 다음 원소의 인덱스가 변경이 되므로 그 다음 원소가 삭제하려는 원소일 때 문제가 생김

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }

  console.log(nums);
  return nums.length;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));

/**
 * Runtime: 72 ms, faster than 80.38% of JavaScript online submissions for Remove Element.
 * Memory Usage: 38.9 MB, less than 49.73% of JavaScript online submissions for Remove Element.
 */

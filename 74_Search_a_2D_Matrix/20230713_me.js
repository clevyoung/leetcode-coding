/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let left = 0;
  let right = matrix.length * matrix[0].length - 1; // 11

  while (left <= right) {
    const mid = Math.floor((left + right) / 2); // 5
    const row = Math.floor(mid / matrix[0].length);
    const col = mid % matrix[0].length;
    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
};

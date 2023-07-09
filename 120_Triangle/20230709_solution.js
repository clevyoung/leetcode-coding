/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const n = triangle.length;
  const dp = Array(n).fill(0);

  // Initialize the dp array with the last row of the triangle
  for (let i = 0; i < n; i++) {
    dp[i] = triangle[n - 1][i];
  }

  // Bottom-up approach to calculate the minimum path sum
  for (let row = n - 2; row >= 0; row--) {
    for (let col = 0; col <= row; col++) {
      dp[col] = Math.min(dp[col], dp[col + 1]) + triangle[row][col];
    }
  }

  return dp[0]; // The minimum path sum will be stored at index 0
};
const triangle = [[2], [4, 6], [9, 8, 1]];

console.log(minimumTotal(triangle));

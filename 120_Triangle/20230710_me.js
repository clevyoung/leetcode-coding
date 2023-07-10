/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const n = triangle.length;
  const dp = new Array(n).fill(1);

  for (let i = 0; i < triangle.length; i++) {
    dp[i] = triangle[triangle.length - 1][i];
  }

  for (let row = n - 2; row >= 0; row--) {
    for (let col = 0; col <= row; col++) {
      dp[col] = Math.min(dp[col], dp[col + 1]) + triangle[row][col];
      // dp[0] = Math.min(dp[0], dp[1]) + triangle[row][col];
      // dp[1] = Math.min(dp[1], dp[2]) + triangle[row][col];
    }
  }

  // 위에서 row가
  return dp[0];
};

// const triangle = [[2], [4, 6], [9, 8, 1]];
const triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];

console.log(minimumTotal(triangle));

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const dp = new Array(triangle.length).fill([]);
  let minimumPath = Infinity;
  dp[0][0] = triangle[0][0];

  for (let i = 0; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      dp[i + 1][j] = triangle[i][j] + dp[i][j];
      dp[i + 1][j + 1] = triangle[i][j + 1] + dp[i][j + 1];
    }

    if (i === triangle.length - 1) {
      minimumPath = Math.min(minimumPath, dp[i][j]);
    }
  }

  return minimumPath;
};

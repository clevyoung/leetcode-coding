/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(Infinity);
  console.log(dp);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    console.log(i);
    for (let j = 0; j < coins.length; j++) {
      console.log(dp[i]);
      console.log(dp[i - coins[j]] + 1);
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1); // 1을 더하는 이유는 j번째 동전의 개수를 1 추가하는 것이다.
      }
    }
  }

  console.log(dp);

  return dp[amount] === Infinity ? -1 : dp[amount];
};

console.log(coinChange([1, 2, 5], 11));

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

var coinChange = function (coins, amount) {
  const dy = new Array(amount + 1).fill(Infinity);
  dy[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i >= coins[j]) {
        dy[i] = Math.min(dy[i], dy[i - coins[j]] + 1);
      }
    }
  }

  return dy[amount] === Infinity ? -1 : dy[amount];
};

console.log(coinChange([1, 2, 5], 11));

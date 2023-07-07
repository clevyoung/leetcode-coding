/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// Time Limit Exceeded 발생

var coinChange = function (coins, amount) {
  let num = -1;

  function backtrack(sum, number) {
    if (sum === amount) {
      num = number;
      return;
    }
    if (sum > amount) {
      return;
    }
    for (let i = 0; i < coins.length; i++) {
      backtrack(sum + coins[i], number + 1);
    }
  }

  backtrack(0, 0);

  return num;
};

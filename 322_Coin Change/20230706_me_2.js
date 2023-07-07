/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// Time Limit Exceeded 발생

var coinChange = function (coins, amount) {
  let num = Infinity;

  function backtrack(sum, number) {
    if (sum === amount) {
      console.log(number);
      console.log(num);
      num = Math.min(number, num);
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

  return num === Infinity ? -1 : num;
};

console.log(coinChange([1, 2, 5], 11));

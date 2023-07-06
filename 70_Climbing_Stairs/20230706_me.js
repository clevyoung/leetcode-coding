/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  /**
   * 1 -> 1 1
   * 2 -> 1+1, 2
   * 3 -> 1+1+1, 2+1, 1+2 3
   * 4 -> 1+1+1+1+1, 1+1+2, 1+2+1, 2+1+1, 2+2 5
   */

  if (n <= 2) {
    return n;
  }

  let prev = 1;
  let curr = 2;

  for (let i = 3; i <= n; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
};

console.log(climbStairs(5));

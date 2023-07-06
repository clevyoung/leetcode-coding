/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  /***
   * n = 1  1
   * n = 2  2
   * n = 3  3
   * n = 4  5
   * n = 5  8
   *
   * next = prev + cur
   */

  let prev = 1;
  let curr = 2;

  for (let i = 3; i <= n; i++) {
    let next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
};

console.log(climbStairs(5));

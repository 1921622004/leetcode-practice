/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n === 0) return 1;
  if (n === 1) return x;
  if (n === -1) return 1 / x;
  if (n % 2 === 0) {
    let a = myPow(x, n > 0 ? Math.floor(n / 2) : Math.ceil(n / 2));
    return a * a;
  } else {
    let a = myPow(x, n > 0 ? Math.floor(n / 2) : Math.ceil(n / 2));
    return a * a * x
  }
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=343 lang=javascript
 *
 * [343] 整数拆分
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  if (n <= 2) return 1;
  let dp = [1, 2];
  for (let i = 3; i <= n; i++) {
    let max = Number.MIN_SAFE_INTEGER;
    for (let j = 1; j < i; j++) {
      max = Math.max(max, dp[i - j - 1] * j, (i - j) * j)
    }
    dp[i - 1] = max;
  }
  return dp[dp.length - 1]
};
// @lc code=end

console.log(integerBreak(10));


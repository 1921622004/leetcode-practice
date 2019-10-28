/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  if (n === 0) return 0;
  let dp = [1];
  let num2Index = 0, num3Index = 0, num5Index = 0;
  for (let i = 1; i < n; i++) {
    let min = Math.min(dp[num2Index] * 2, dp[num3Index] *3, dp[num5Index] *5);
    dp[i] = min;
    if (min === dp[num2Index] * 2) num2Index++;
    if (min === dp[num3Index] * 3) num3Index++;
    if (min === dp[num5Index] * 5) num5Index++;
  }
  return dp[dp.length - 1];
};

// @lc code=end


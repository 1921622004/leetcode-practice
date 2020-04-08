/*
 * @lc app=leetcode.cn id=446 lang=javascript
 *
 * [446] 等差数列划分 II - 子序列
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function (A) {
  let dp = [{}, {}];
  dp[1][A[1] - A[0]] = 1;
  let sum = 0;
  for (let i = 2; i < A.length; i++) {
    dp[i] = {};
    for (let j = i - 1; j > -1; j--) {
      let dif = A[i] - A[j];
      let a = dp[j][dif] || 0;
      dp[i][dif] = (dp[i][dif] || 0) + a + 1;
      sum += a;
    }
  }
  return sum
};
// @lc code=end

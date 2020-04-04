/*
 * @lc app=leetcode.cn id=413 lang=javascript
 *
 * [413] 等差数列划分
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function (A) {
  let dp = [0, 0];
  let count = 0;
  for (let i = 2; i < A.length; i++) {
    if ((A[i] - A[i - 1]) === A[i - 1] - A[i - 2]) {
      dp[i] = dp[i - 1] + 1;
      count += dp[i];
    } else {
      dp[i] = 0;
    }
  }
  return count
};
// @lc code=end

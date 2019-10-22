/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  const dp = [];
  let i = 0, j, max = 0;
  for (; i < matrix.length; i++) {
    dp[i] = [0];
    j = 0;
    let curRow = matrix[i];
    for (; j < curRow.length; j++) {
      let cur = parseInt(matrix[i][j]);
      if (i === 0 || j === 0) {
        dp[i][j] = cur;
      } else {
        if (cur === 0) {
          dp[i][j] = 0
        } else {
          dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1]) + 1
        }
      }
      if (dp[i][j] >= max) max = dp[i][j]
    }
  }
  return max * max
};
// @lc code=end

/*
 * @lc app=leetcode.cn id=646 lang=javascript
 *
 * [646] 最长数对链
 */

// @lc code=start
/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (pairs) {
  if (!pairs.length) return 0;
  pairs.sort((a, b) => a[0] - b[0]);
  let dp = [1];
  for (let i = 1; i < pairs.length; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
      if (pairs[j][1] < pairs[i][0]) {
        max = Math.max(max, dp[j]);
      }
    }
    dp[i] = max + 1;
  }
  let max = 1;
  for (let i = 0; i < dp.length; i++) {
    max = Math.max(max, dp[i])
  }
  return max
};
// @lc code=end


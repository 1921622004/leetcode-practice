/*
 * @lc app=leetcode.cn id=354 lang=javascript
 *
 * [354] 俄罗斯套娃信封问题
 */

// @lc code=start
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
  if (envelopes.length === 0) return 0
  envelopes.sort((a, b) => a[0] - b[0]);
  const dp = [1];
  for (let i = 1; i < envelopes.length; i++) {
    let cur = envelopes[i];
    let max = 1;
    for (let j = 0; j < i; j++) {
      if (
        cur[0] > envelopes[j][0] && cur[1] > envelopes[j][1]
      ) {
        max = Math.max(dp[j] + 1, max)
      }
    }
    dp[i] = max
  }
  return Math.max(...dp)
};
// @lc code=end

// console.log(maxEnvelopes([[4, 5], [4, 6], [6, 7], [2, 3], [1, 1], [1, 1]]));

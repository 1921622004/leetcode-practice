/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  let dp = new Array(word2.length + 1);
  dp[0] = [];
  for (let i = 0; i <= word1.length; i++) dp[0][i] = i;
  for (let j = 1; j <= word2.length; j++) {
    dp[j] = [j];
  }
  for (let x = 0; x < word2.length; x++) {
    for (let y = 0; y < word1.length; y++) {
      if (word2[x] === word1[y]) {
        dp[x + 1][y + 1] = dp[x][y];
      } else {
        dp[x + 1][y + 1] = Math.min(dp[x][y], dp[x][y + 1], dp[x + 1][y]) + 1;
      }
    }
  }
  return dp[word2.length][word1.length];
};

// https://www.youtube.com/watch?v=We3YDTzNXEk
// @lc code=end


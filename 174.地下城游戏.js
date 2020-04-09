/*
 * @lc app=leetcode.cn id=174 lang=javascript
 *
 * [174] 地下城游戏
 */

// @lc code=start
/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
  const dp = [];
  const rows = dungeon.length;
  const columns = dungeon[0].length;
  for (let i = 0; i <= rows; i++) dp[i] = new Array(columns + 1).fill(Number.MAX_SAFE_INTEGER);
  dp[rows][columns - 1] = dp[rows - 1][columns] = 1;
  for (let i = rows - 1; i >= 0; i--) {
    for (let j = columns - 1; j >= 0; j--) {
      dp[i][j] = Math.max(1, Math.min(dp[i + 1][j], dp[i][j + 1]) - dungeon[i][j])
    }
  }
  return dp[0][0]
};
// @lc code=end


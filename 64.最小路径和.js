/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let i = 0, j = 0;
  const dp = [];
  for (; i < grid.length; i++) {
    let curRow = grid[i];
    j = 0;
    dp[i] = [];
    for (; j < curRow.length; j++) {
      if (i === 0) {
        if (j === 0) {
          dp[i][j] = curRow[j];
        } else {
          dp[i][j] = dp[i][j - 1] + curRow[j]
        }
        continue
      }
      if (j === 0) {
        dp[i][j] = dp[i - 1][j] + curRow[j];
        continue
      }
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + curRow[j]
    }
  }
  return dp[i - 1][j - 1]
};
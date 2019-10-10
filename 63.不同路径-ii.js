/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const dp = [];
  let i = 0, j = 0;
  for (; i < obstacleGrid.length; i++) {
    const curRow = obstacleGrid[i];
    j = 0;
    dp[i] = [];
    for (; j < curRow.length; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0;
        continue
      }
      if (i === 0) {
        if (j !== 0 && dp[0][j - 1] === 0) {
          dp[i][j] = 0;
        } else {
          dp[i][j] = 1;
        }
        continue
      };
      if (j === 0) {
        if (i !== 0 && dp[i - 1][j] === 0) {
          dp[i][j] = 0
        } else {
          dp[i][j] = 1
        }
        continue
      }
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[i - 1][j - 1]
};


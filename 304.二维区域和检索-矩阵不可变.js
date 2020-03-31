/*
 * @lc app=leetcode.cn id=304 lang=javascript
 *
 * [304] 二维区域和检索 - 矩阵不可变
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  const dp = new Array(matrix.length);
    for (let i = 0; i < matrix.length; i++) {
      dp[i] = [];
      const curRow = matrix[i];
      for (let j = 0; j < curRow.length; j++) {
        if (i === 0 && j === 0) {
          dp[i][j] = matrix[i][j];
        } else if (i === 0) {
          dp[i][j] = dp[i][j - 1] + matrix[i][j];
        } else if (j === 0) {
          dp[i][j] = dp[i - 1][j] + matrix[i][j];
        } else {
          dp[i][j] = dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1] + matrix[i][j];
        }
      }
    }
    this.dp = dp;
  };
  
  /** 
   * @param {number} row1 
   * @param {number} col1 
   * @param {number} row2 
   * @param {number} col2
   * @return {number}
   */
  NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
      const a = col1 > 0 ? this.dp[row2][col1 - 1] : 0;
      const b = row1 > 0 ? this.dp[row1 - 1][col2] : 0;
      const c = (row1 > 0 && col1 > 0) ? this.dp[row1 - 1][col1 - 1] : 0;
      return this.dp[row2][col2] - a - b + c
  };

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end


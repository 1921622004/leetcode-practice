/*
 * @lc app=leetcode.cn id=1277 lang=javascript
 *
 * [1277] 统计全为 1 的正方形子矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function (matrix) {
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    let cur = matrix[i];
    for (let j = 0; j < cur.length; j++) {
      if (matrix[i][j] === 1) {
        if (i === 0 || j === 0) {
          matrix[i][j] = 1;
        } else {
          matrix[i][j] = Math.min(Math.min(matrix[i - 1][j], matrix[i][ j -1]), matrix[i - 1][j -1]) + 1;
        }
        count += matrix[i][j];
      } else {
        matrix[i][j] = 0;
      }
    }
  }
  return count
};
// @lc code=end


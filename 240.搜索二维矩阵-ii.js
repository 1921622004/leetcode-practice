/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (!matrix[0] || !matrix[0].length) return false
  let col = 0, row = matrix[0].length - 1;
  while (col < matrix.length && row >= 0) {
    let cur = matrix[col][row];
    if (cur < target) {
      col++
    } else if (cur > target) {
      row--
    } else {
      return true
    }
  }
  return false
};
// @lc code=end

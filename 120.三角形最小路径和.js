/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const top = triangle[triangle.length - 1];
  for (let i = triangle.length - 2; i > -1; i--) {
    let curRow = triangle[i];
    for (let i = 0; i < curRow.length; i++) {
      top[i] = Math.min(top[i], top[i + 1]) + curRow[i];
    }
  }
  return top[0];
};
// @lc code=end


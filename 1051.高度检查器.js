/*
 * @lc app=leetcode.cn id=1051 lang=javascript
 *
 * [1051] 高度检查器
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
  let ret = 0
  let oldHeights = [...heights]
  let sortedHeights = heights.sort((a, b) => a - b)
  oldHeights.forEach((h, i) => {
    if (sortedHeights[i] !== h) ret++
  })
  return ret
};
// @lc code=end


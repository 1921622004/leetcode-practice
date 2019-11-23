/*
 * @lc app=leetcode.cn id=747 lang=javascript
 *
 * [747] 至少是其他数字两倍的最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  let max = Math.max(...nums);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === max) continue
    if (nums[i] * 2 > max) return -1
  }
  return nums.indexOf(max)
};
// @lc code=end


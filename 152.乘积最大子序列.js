/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let tMax = 1, tMin = 1, max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];
    if (cur < 0) {
      let temp = tMax;
      tMax = tMin;
      tMin = temp;
    }
    tMax = Math.max(tMax * cur, cur);
    tMin = Math.min(tMin * cur, cur);
    max = Math.max(tMax, max);
  }
  return max
};
// @lc code=end


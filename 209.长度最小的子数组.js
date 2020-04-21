/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  let cur = 0;
  let sum = [0];
  for (let i = 0; i < nums.length; i++) {
    sum[i + 1] = cur + nums[i];
    cur = sum[i + 1];
  }
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (sum[i + 1] - sum[j] >= s) {
        min = Math.min(min, i - j + 1);
      }
    }
  }
  return min === Number.MAX_SAFE_INTEGER ? 0 : min
};
// @lc code=end


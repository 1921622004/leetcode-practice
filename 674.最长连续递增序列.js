/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  if (!nums.length) return 0;
  let max = 1;
  let temp = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] > nums[i]) {
      temp++;
      if (temp > max) {
        max = temp
      }
    } else {
      temp = 1;
    }
  }
  return max
};
// @lc code=end


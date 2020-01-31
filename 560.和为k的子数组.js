/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为K的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let sum = [0];
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    sum[i + 1] = sum[i] + nums[i];
    for (let j = 0; j <= i; j++) {
      if (sum[i + 1] - sum[j] === k) {
        count++;
      }
    }
  }
  return count
};
// @lc code=end

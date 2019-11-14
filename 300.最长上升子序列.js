/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长上升子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (!nums.length) return 0;
  const dp = [1];
  for (let i = 1; i < nums.length; i++) {
    let cur = nums[i];
    let prevDp = [];
    for (let j = 0; j < i; j++) {
      if (cur > nums[j]) {
        prevDp.push(dp[j]);
      }
    }
    if (!prevDp.length) {
      dp[i] = 1;
    } else {
      dp[i] = Math.max(...prevDp) + 1
    }
  }
  return Math.max(...dp);
};
// @lc code=end

console.log(lengthOfLIS([10, 9, 2, 5, 3, 4]));


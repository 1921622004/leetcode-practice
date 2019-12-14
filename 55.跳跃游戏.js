/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (nums.length === 0) return true;
  let dp = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      dp[i] = true;
      continue;
    }
    let flag = false;
    for (let j = 0; j < i; j++) {
      if (flag) break;
      let cur = nums[j];
      if ((j + cur) >= i && dp[j]) {
        flag = true
      }
    }
    dp[i] = flag
  }
  return dp[dp.length - 1]
};
// @lc code=end


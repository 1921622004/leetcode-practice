/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (!nums.length) return 0;
  const dp = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      dp[i] = nums[i];
      continue
    }
    if (i === 1) {
      dp[i] = Math.max(nums[0], nums[1]);
      continue
    }
    let max = 0;
    for (let j = 0; j < i - 1; j++) {
      max = Math.max(max, dp[j])
    }
    dp[i] = max + nums[i];
  }
  let res = 0;
  for (let k = 0; k < dp.length; k++) {
    res = Math.max(res, dp[k]);
  }
  return res;
};
// @lc code=end

console.log(rob([1, 2, 3, 1]));


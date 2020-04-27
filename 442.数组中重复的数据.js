/*
 * @lc app=leetcode.cn id=442 lang=javascript
 *
 * [442] 数组中重复的数据
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    const absNum = Math.abs(nums[i]);
    if (nums[absNum - 1] < 0) {
      res.push(absNum)
    } else {
      nums[absNum - 1] = nums[absNum - 1] * -1;
    }
  }
  return res
};
// @lc code=end


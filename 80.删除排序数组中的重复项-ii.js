/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除排序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length - 2;) {
    if (nums[i] === nums[i + 1] && nums[i] === nums[i + 2]) {
      nums.splice(i, 1);
    } else {
      i++
    }
  }
  return nums.length
};
// @lc code=end

// console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));

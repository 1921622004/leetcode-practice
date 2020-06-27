/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    const cur = nums[middle];
    if (cur === target) {
      return middle
    } else if (cur < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1
};
// @lc code=end

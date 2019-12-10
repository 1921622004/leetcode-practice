/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let leftVal = nums[left];
    if (leftVal === target) return left;
    let rightVal = nums[right];
    if (rightVal === target) return right;
    let middle = Math.floor((left + right) / 2);
    let middleVal = nums[middle];
    if (middleVal === target) return middle;
    if (nums[left] <= middleVal) {
      if (target >= nums[left] && target < middleVal) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    } else {
      if (target <= nums[right] && target > middleVal) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }
  return -1
};
// @lc code=end

// console.log(search([8, 1, 2, 3, 4, 5, 6, 7], 6));



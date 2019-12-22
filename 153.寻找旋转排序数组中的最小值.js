/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  if (!nums.length) return;
  if (nums.length === 1 || nums[0] < nums[nums.length - 1]) {
    return nums[0]
  }
  let left = 0;
  let rightVal = nums[nums.length - 1];
  let right = nums.length - 1;
  while (left < right) {
    let middle = Math.floor(left + right);
    if (nums[middle + 1] < nums[middle]) {
      return nums[middle + 1]
    }
    if (nums[middle - 1] > nums[middle]) {
      return nums[middle]
    }
    if (nums[middle] > rightVal) {
      left = middle + 1
    } else {
      right = middle - 1;
    }
  }
  return null
};
// @lc code=end

// console.log(findMin([3, 4, 5, 1, 2]));

/*
 * @lc app=leetcode.cn id=540 lang=javascript
 *
 * [540] 有序数组中的单一元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    let isEven = middle % 2 === 0;
    if (nums[middle] === nums[middle + 1]) {
      if (isEven) {
        if ((middle + 2) >= right) {
          return nums[right]
        } else {
          left = middle + 2;
        }
      } else {
        if ((middle - 2) <= left) {
          return nums[left]
        } else {
          right = middle - 1;
        }
      }

    } else if (nums[middle] === nums[middle - 1]) {
      if (isEven) {
        if ((middle - 2) <= left) {
          return nums[left]
        } else {
          right = middle - 2;
        }
      } else {
        if ((middle + 2) >= right) {
          return nums[right]
        } else {
          left = middle + 1;
        }
      }
    } else {
      return nums[middle]
    }
  }
};
// @lc code=end


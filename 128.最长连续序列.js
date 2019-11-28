/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];
    let temp = 1;
    if (nums.indexOf(cur - 1) === -1) {
      while (nums.indexOf(++cur) > -1) {
        temp++
      }
    }
    max = Math.max(max, temp);
  }
  return max
};
// @lc code=end

// console.log(longestConsecutive([1, 3, 5, 2, 4]));

/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let res = [];
  let temp = 1;
  for (let i = 0; i < nums.length; i++) {
    res[i] = temp;
    temp *= nums[i];
  }
  temp = 1;
  for (let i = nums.length - 1; i > -1; i--) {
    res[i] *= temp;
    temp *= nums[i];
  }
  return res
};
// @lc code=end

// console.log(productExceptSelf(1, 2, 3, 4));

/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = [];
  helper(nums, res);
  return res
};

function helper(nums, res, cur = []) {
  if (cur.length === nums.length) {
    res.push(cur);
    return
  }
  for (let i = 0; i < nums.length; i++) {
    if (cur.indexOf(nums[i]) > -1) continue
    helper(nums, res, cur.concat(nums[i]));
  }
}

// @lc code=end

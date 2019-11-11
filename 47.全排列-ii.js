/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const res = [];
  helper(res, [], nums)
  return res
};

function helper(res, cur, nums, idx = 0) {
  if (cur.length === nums.length) {
    res.push(cur);
    return
  }
  let used = [];
  for (let i = idx; i < nums.length; i++) {
    if (used.indexOf(nums[i]) > -1) continue;
    used.push(nums[i]);
    helper(res, cur.concat(nums[i]), nums, i + 1)
  }
}

console.log(permuteUnique([1, 1, 2]));

// @lc code=end


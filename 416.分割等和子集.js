/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  nums.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
  };
  if (sum % 2 !== 0) return false
  return helper(sum / 2, 0, nums)
};

function helper(target, index, nums) {
  if (target < 0) return false
  for (let i = index; i < nums.length; i++) {
    if (nums[i] > target) return false
    if (nums[i] === target) return true;
    if (helper(target - nums[i], i + 1, nums)) return true
  }
  return false
}

// @lc code=end

// console.log(canPartition([3, 3, 3, 4, 5]));



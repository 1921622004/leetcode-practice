/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let res = { dif: Number.MAX_SAFE_INTEGER, ary: [], sum:0 };
  helper(nums, target, res);
  return res.sum;
};


/**
 * 
 * @param {number[]} nums 
 * @param {number} target 
 * @param {dif: number, ary: number[]} res 
 */
function helper(nums, target, res) {
  let level0 = [], level1 = [], level2 = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (level0.indexOf(nums[i]) > -1) continue;
    level0.push(nums[i]);
    for (let j = i + 1; j < nums.length - 1; j++) {
      if (level1.indexOf(nums[j]) > -1) continue;
      level1.push(nums[j]);
      for (let k = j + 1; k < nums.length; k++) {
        if (level2.indexOf(nums[k]) > -1) continue;
        level2.push(nums[k]);
        let sum;
        if ((sum = Math.abs(nums[i] + nums[j] + nums[k] - target)) < res.dif) {
          res.dif = sum;
          res.ary = [nums[i], nums[j], nums[k]];
          res.sum = nums[i] + nums[j] + nums[k]
        }
      }
      level2 = []
    }
    level1 = [];
  }
  return res.sum
}
// @lc code=end


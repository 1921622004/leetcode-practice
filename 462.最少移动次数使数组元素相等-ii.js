/*
 * @lc app=leetcode.cn id=462 lang=javascript
 *
 * [462] 最少移动次数使数组元素相等 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) continue;
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      count += Math.abs(nums[i] - nums[j]);
    }
    map[nums[i]] = count;
  }
  return Math.min(...Object.values(map));
};
// @lc code=end

console.log(minMoves2([1, 2, 3]));

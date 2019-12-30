/*
 * @lc app=leetcode.cn id=164 lang=javascript
 *
 * [164] 最大间距
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
  if (nums.length < 2) return 0;
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = true
  }
  let keys = Object.keys(map);
  let max = Number.MIN_SAFE_INTEGER;
  for (let j = 0; j < keys.length - 1; j++) {
    let gap = keys[j + 1] - keys[j];
    if (gap > max) {
      max = gap
    }
  }
  return max === Number.MIN_SAFE_INTEGER ? 0 : max
};
// @lc code=end

// console.log(maximumGap([3, 6, 9, 1]));

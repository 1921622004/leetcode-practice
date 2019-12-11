/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  nums.sort((a, b) => {
    let as = a + '', bs = b + '';
    return parseInt(bs + as) - parseInt(as + bs);
  });
  let str = nums.join('');
  if (parseInt(str) === 0) return '0';
  return str
};
// @lc code=end


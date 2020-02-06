/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let map = {};
  map[n] = true;
  while (n !== 1) {
    let ary = (n + '').split('');
    n = ary.reduce((prev, cur) => {
      return prev += Math.pow(parseInt(cur), 2);
    }, 0);
    if (map[n]) return false
    map[n] = true;
  }
  return true
};
// @lc code=end

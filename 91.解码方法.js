/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (s[0] === '0') return 0;
  let cur = 1, pre = 1;
  for (let i = 1; i < s.length; i++) {
    let temp = cur;
    if (s[i] === '0') {
      if (s[i - 1] === '1' || s[i - 1] === '2') {
        cur = pre
      } else {
        return 0
      }
    } else if (s[i - 1] === '1') {
      cur = cur + pre
    } else if (s[i - 1] === '2' && parseInt(s[i]) <= 6 && parseInt(s[i]) >= 0) {
      cur = cur + pre
    }
    pre = temp
  }
  return cur
};


// @lc code=end

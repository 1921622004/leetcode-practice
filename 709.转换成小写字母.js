/*
 * @lc app=leetcode.cn id=709 lang=javascript
 *
 * [709] 转换成小写字母
 */

// @lc code=start
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
  let ret = '';
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    if (charCode <= 90 && charCode >= 65) {
      ret += String.fromCharCode(charCode + 32);
    } else {
      ret += str[i]
    }
  }
  return ret
};
// @lc code=end
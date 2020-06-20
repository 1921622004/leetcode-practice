/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let flag = true;
  s = s.replace(/[^A-Za-z0-9]/g, '')
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    const leftCharCode = s.charCodeAt(i);
    const rightCharCode = s.charCodeAt(s.length - 1 - i);
    if (
      leftCharCode === rightCharCode ||
      (
        Math.abs(leftCharCode - rightCharCode) === 32 &&
        leftCharCode >= 65 && 
        rightCharCode >= 65
      )
    ) continue;
    else { flag = false; break }
  }
  return flag
};
// @lc code=end

/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let res = '';
  let sum = 0;
  let aAry = a.split(''), bAry = b.split('');
  let aE, bE;
  while (aAry.length > 0 || bAry.length > 0) {
    sum = Math.floor(sum / 2);
    aE = Number(aAry.pop()) || 0;
    bE = Number(bAry.pop()) || 0;
    sum += aE + bE;
    res = (sum > 1 ? Math.floor(sum % 2) : sum) + res;
  }
  if (sum > 1) {
    res = 1 + res;
  }
  return res
};
// @lc code=end


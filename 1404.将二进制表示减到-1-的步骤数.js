/*
 * @lc app=leetcode.cn id=1404 lang=javascript
 *
 * [1404] 将二进制表示减到 1 的步骤数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function (s) {
  let count = 0;
  let str = s;
  while (str !== '1') {
    if (str.endsWith('0')) {
      str = str.substr(0, str.length - 1);
    } else {
      str = addOne(str);
    }
    count++;
  }
  /**
   * 
   * @param {string} str
   * @returns {string}
   */
  function addOne(str) {
    let ary = str.split('');
    let count  = 0;
    for (let i = ary.length - 1; i >= 0; i--) {
      let cur = ary[i];
      if (cur === '1') {
        count++;
        ary[i] = '0';
      } else {
        ary[i] = '1';
        break;
      }
    }
    if (count === ary.length) ary.unshift('1');
    return ary.join('');
  }
  return count
};
// @lc code=end

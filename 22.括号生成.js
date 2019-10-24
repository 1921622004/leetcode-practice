/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = [];
  helper('', res, n, n)
  return res
};

function helper(str, res, left, right) {
  if (left === 0 && right === 0) {
    res.push(str)
  }
  if (right > left) {
    helper(str + ')', res, left, right - 1)
  }
  if (left > 0) {
    helper(str + '(', res, left - 1, right);
  }
}

// @lc code=end



/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  const queue = [-1];
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[queue[queue.length - 1]] === '(' && s[i] === ')') {
      queue.pop();
      let length = i - queue[queue.length - 1];
      max = Math.max(length, max);
    } else {
      queue.push(i)
    }
  }
  return max
};
// @lc code=end


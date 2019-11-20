/*
 * @lc app=leetcode.cn id=779 lang=javascript
 *
 * [779] 第K个语法符号
 */

// @lc code=start
/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var kthGrammar = function (N, K) {
  N--; K--;
  let dirs = [], res = 0;
  while (K != 0) {
    if (K % 2) {
      dirs.push('right')
    } else {
      dirs.push('left')
    };
    K = Math.floor(K / 2);
  }
  for (let i = dirs.length - 1; i > -1; i--) {
    let curDir = dirs[i];
    if ((curDir === 'left' && res === 0) || (curDir === 'right' && res === 1)) {
      res = 0
    } else {
      res = 1
    }
  }
  return res
};
// @lc code=end


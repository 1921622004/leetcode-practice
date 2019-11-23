/*
 * @lc app=leetcode.cn id=1104 lang=javascript
 *
 * [1104] 二叉树寻路
 */

// @lc code=start
/**
 * @param {number} label
 * @return {number[]}
 */
var pathInZigZagTree = function (label) {
  let n = Math.floor(Math.log2(label));
  let res = [label];
  for (; n > 0; n--) {
    if (n % 2) {
      label = Math.pow(2, n - 1) + Math.floor((Math.pow(2, n + 1) - label - 1) / 2);
    } else {
      label = Math.pow(2, n) - Math.floor((label - Math.pow(2, n)) / 2) - 1;
    }
    res.unshift(label)
  }
  return res
};
// @lc code=end

// console.log(pathInZigZagTree(16));

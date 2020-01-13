/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
  let res = [];
  let temp = [];
  if (root) {
    temp.push(root)
  } else {
    return temp
  }
  while (temp.length) {
    let max = Number.MIN_SAFE_INTEGER;
    let len = temp.length;
    let i = 0;
    while (i < len) {
      let node = temp.shift();
      if (node.val > max) {
        max = node.val
      };
      node.left && temp.push(node.left);
      node.right && temp.push(node.right);
      i++;
    }
    res.push(max);
  }
  return res
};
// @lc code=end

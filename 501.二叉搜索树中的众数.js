/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
var findMode = function (root) {
  let res = [];
  let maxCount = 0;
  let curCount = 0;
  let prev = null;
  (function inorder(node) {
    if (!node) return
    if (!node.left && !prev) {
      prev = node;
    }
    inorder(node.left);
    if (prev.val === node.val) {
      curCount++;
    } else {
      prev = node;
      curCount = 1;
    }
    if (curCount === maxCount) {
      maxCount = curCount;
      res = [...res, node.val];
    } else if (curCount > maxCount) {
      maxCount = curCount;
      res = [node.val]
    }
    inorder(node.right);
  })(root, 0)
  return res
};
// @lc code=end

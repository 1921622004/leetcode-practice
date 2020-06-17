/*
 * @lc app=leetcode.cn id=951 lang=javascript
 *
 * [951] 翻转等价二叉树
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
 * @typedef {Object} TreeNode
 * @property {number} val
 * @property {TreeNode} left
 * @property {TreeNode} right
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function (root1, root2) {
  if (!root1 && !root2) return true
  if ((!root1 && root2) || (root1 && !root2)) return false;
  if (root1.val !== root2.val) return false;
  return (flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right))
    || (flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left))

};
// @lc code=end


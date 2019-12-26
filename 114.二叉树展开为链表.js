/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  let pre = null;
  (function mapper(node) {
    if (!node) return
    node.right && mapper(node.right);
    node.left && mapper(node.left);
    node.right = pre;
    node.left = null;
    pre = node
  })(root)
};
// @lc code=end

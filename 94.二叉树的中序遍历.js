/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function (root) {
  let ary = [];
  let res = [];
  let node = root;
  while (node || ary.length) {
    while (node) {
      ary.push(node);
      node = node.left
    }
    node = ary.pop();
    res.push(node.val);
    node = node.right
  }
  return res
};
// @lc code=end


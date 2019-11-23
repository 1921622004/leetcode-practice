/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (!postorder.length) return null;
  if (postorder.length === 1) {
    return new TreeNode(postorder[0]);
  }
  let rootVal = postorder[postorder.length - 1];
  let root = new TreeNode(rootVal);
  let rootIndex = inorder.indexOf(rootVal);
  root.left = buildTree(inorder.slice(0, rootIndex), postorder.slice(0, rootIndex));
  root.right = buildTree(inorder.slice(rootIndex + 1), postorder.slice(rootIndex, postorder.length - 1))
  return root;
};
// @lc code=end


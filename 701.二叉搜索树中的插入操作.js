/*
 * @lc app=leetcode.cn id=701 lang=javascript
 *
 * [701] 二叉搜索树中的插入操作
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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  let node = root;
  while (node) {
    if (node.val > val) {
      if (node.left) {
        node = node.left
      } else {
        node.left = new TreeNode(val);
        break
      }
    } else if (node.val < val) {
      if (node.right) {
        node = node.right
      } else {
        node.right = new TreeNode(val);
        break        
      }
    } else break
  }
  return root
};
// @lc code=end


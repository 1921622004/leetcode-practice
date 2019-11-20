/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let ary = [];
  (function mapper(node) {
    if (!node) return
    mapper(node.left);
    ary.push(node);
    mapper(node.right);
  })(root);
  return ary[k - 1].val
};
// @lc code=end


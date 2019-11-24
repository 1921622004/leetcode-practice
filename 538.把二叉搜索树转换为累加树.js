/*
 * @lc app=leetcode.cn id=538 lang=javascript
 *
 * [538] 把二叉搜索树转换为累加树
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
 * @return {TreeNode}
 */
var convertBST = function (root) {
  let sum = 0;
  let ary = [];
  (function mapper(node) {
    if (!node) return;
    mapper(node.left);
    ary.push(node);
    mapper(node.right);
  })(root);
  for (let i = ary.length - 1; i > -1; i--) {
    let node = ary[i];
    let temp = node.val
    node.val += sum;
    sum += temp;
  }
  return root;
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
 * @return {number}
 */
var maxPathSum = function (root) {
  if (!root) return 0;
  let ret = Number.MIN_SAFE_INTEGER;
  (function mapper(node) {
    if (!node.left && !node.right) {
      if (ret === Number.MIN_SAFE_INTEGER) {
        ret = node.val;
      } else {
        ret = Math.max(node.val, ret);
      }
      return node.val;
    }
    let leftVal, rightVal;
    if (!node.left) {
      rightVal = mapper(node.right);
      ret = Math.max(ret, rightVal, node.val, rightVal + node.val);
      return Math.max(rightVal + node.val, node.val)
    } else if (!node.right) {
      leftVal = mapper(node.left);
      ret = Math.max(ret, leftVal, node.val, leftVal + node.val);
      return Math.max(leftVal + node.val, node.val)
    } else {
      leftVal = mapper(node.left);  // 9
      rightVal = mapper(node.right);
      ret = Math.max(ret, rightVal, node.val, leftVal, leftVal + rightVal + node.val, leftVal + node.val, rightVal + node.val);
      return Math.max(leftVal + node.val, node.val, rightVal + node.val);
    }
  })(root);
  return ret
};
// @lc code=end
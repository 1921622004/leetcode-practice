/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  return helper(root, p.val, q.val).node;
};

function helper(root, p, q) {
  if (root === null) return { count: 0, node: null };

  let leftRes = root.left ? helper(root.left, p, q) : { count: 0, node: null };
  let rightRes = root.right ? helper(root.right, p, q) : { count: 0, node: null };

  if (leftRes.count === 2) return leftRes
  if (rightRes.count === 2) return rightRes
  if (leftRes.count === 1 && rightRes.count === 1) {
    return { count: 2, node: root }
  }
  if (leftRes.count === 1) {
    if (root.val === q || root.val === p) {
      return { count: 2, node: root }
    } else {
      return leftRes
    }
  }
  if (rightRes.count === 1) {
    if (root.val === q || root.val === p) {
      return { count: 2, node: root }
    } else {
      return rightRes
    }
  }
  if (root.val === p || root.val === q) {
    return { count: 1, node: root }
  }
  return { count: 0, node: null }
}

// @lc code=end
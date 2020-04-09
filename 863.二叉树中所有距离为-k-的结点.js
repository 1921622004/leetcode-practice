/*
 * @lc app=leetcode.cn id=863 lang=javascript
 *
 * [863] 二叉树中所有距离为 K 的结点
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
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var distanceK = function (root, target, K) {
  let res = [];
  let targetFound = false;
  (function mapper(node, parent) {
    if (!node) return
    if (node === target) targetFound = true;
    if (parent) {
      node.parent = parent;
    }
    mapper(node.left, node);
    mapper(node.right, node);
  })(root, null);
  if (!targetFound) return res;
  (function mapper(node, dis, prevPath) {
    if (!node) return
    if (dis === K) {
      res.push(node.val);
      return
    }
    if (dis < K) {
      let next = prevPath.concat(node);
      node.left && !prevPath.includes(node.left) && mapper(node.left, dis + 1, next);
      node.right && !prevPath.includes(node.right) && mapper(node.right, dis + 1, next);
      node.parent && !prevPath.includes(node.parent) && mapper(node.parent, dis + 1, next);
    }
    if (dis > K) return
  })(target, 0, []);
  return res
};
// @lc code=end


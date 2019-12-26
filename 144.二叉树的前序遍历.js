/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function (root) {
  let node = root;
  let ary = [];
  let res = [];
  while (node || ary.length > 0) {
    while (node) {
      ary.push(node);
      res.push(node.val);
      node = node.left;
    }
    if (ary.length > 0) {
      node = ary.pop();
      node = node.right
    }
  }
  return res
};
// @lc code=end

// console.log(preorderTraversal({
//   val: 1,
//   left: null,
//   right: {
//     val: 2,
//     left: {
//       val: 3,
//       left: null,
//       right: null
//     }
//   }
// }));

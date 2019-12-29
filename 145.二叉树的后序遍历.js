/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function (root) {
  let node = root;
  let ary = [];
  let res = []
  let flag = false, top = -1;
  if (root) {
    do {
      while (node) {
        top++;
        ary[top] = node;
        node = node.left;
      }
      let temp = null;
      flag = true;
      while (top !== -1 && flag) {
        node = ary[top];
        if (node.right === temp) {
          res.push(node.val);
          top--;
          temp = node;
        } else {
          node = node.right;
          flag = false
        }
      }
    } while (top !== -1);
  }
  return res
};
// @lc code=end


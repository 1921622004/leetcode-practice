/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层次遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let res = [];
  if (!root) return [];
  let tempAry = [root];
  let levelAry = [];
  while (tempAry.length) {
    let i = 0, len = tempAry.length;
    for (; i < len; i++) {
      let curNode = tempAry[i];
      levelAry.push(curNode.val);
      curNode.left && tempAry.push(curNode.left);
      curNode.right && tempAry.push(curNode.right);
    }
    res.push(levelAry);
    levelAry = [];
    tempAry = tempAry.slice(i);
  }
  return res;
};
// @lc code=end


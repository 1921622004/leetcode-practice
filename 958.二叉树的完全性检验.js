/*
 * @lc app=leetcode.cn id=958 lang=javascript
 *
 * [958] 二叉树的完全性检验
 */

// @lc code=start
/**
 * @typedef {Object} TreeNode
 * @property {number} val
 * @property {TreeNode} left
 * @property {TreeNode} right
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isCompleteTree = function (root) {
  if (!root) return false;
  let queue = [root];
  const ary = [root];
  while (queue.length) {
    const newQueue = [];
    for (let i = 0; i < queue.length; i++) {
      const cur = queue[i];
      if (cur) {
        newQueue.push(cur.left, cur.right);
        ary.push(cur.left, cur.right);
      }
    }
    queue = newQueue;
  }
  let isThereEmptyNode = false;
  for (let i = 0; i < ary.length; i++) {
    if (ary[i] && isThereEmptyNode) return false
    if (ary[i] === null) {
      isThereEmptyNode = true;
    }
  }
  return true
};
// @lc code=end

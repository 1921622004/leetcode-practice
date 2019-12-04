/*
 * @lc app=leetcode.cn id=1028 lang=javascript
 *
 * [1028] 从先序遍历还原二叉树
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
 * @param {string} S
 * @return {TreeNode}
 */
var recoverFromPreorder = function (S) {
  let pos = 0;
  let node = (function buildNode(level) {
    let cur = '';
    while (S[pos] !== '-' && pos < S.length) {
      cur += S[pos];
      pos++;
    }
    if (pos > S.length) return null;
    let node = new TreeNode(cur);
    function checkNext() {
      let flag = true;
      for (let i = 0; i <= level; i++) {
        if (S[pos + i] !== '-') {
          flag = false;
          break
        }
      }
      return flag
    }
    if (checkNext()) {
      pos += (level + 1);
      node.left = buildNode(level + 1);
    }
    if (checkNext()) {
      pos += (level + 1);
      node.right = buildNode(level + 1);
    }
    return node;
  })(0)
  return node;
};
// @lc code=end


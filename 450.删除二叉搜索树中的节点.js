/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (root === null) return null
  if (root.val === key) {
    if (!root.left && !root.right) {
      return null
    } else if (!root.left) {
      return root.right
    } else if (!root.right) {
      return root.left
    } else {
      let val = findMin(root.right);
      root.val = val;
      root.right = deleteNode(root.right, val);
    }
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key)
  } else {
    root.left = deleteNode(root.left, key);
  }
  return root
};

/**
 * 
 * @param {TreeNode} node 
 * @return {Number}
 */
var findMin = function (node) {
  while (node.left) {
    node = node.left
  }
  return node.val
}

// @lc code=end


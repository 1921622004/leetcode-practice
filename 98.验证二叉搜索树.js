/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  let ary = [];
  mapTree(root, ary);
  if (ary.length === 0) return true;
  for (let i = 0; i < ary.length - 1; i++) {
    if (ary[i] >= ary[i + 1]) return false
  }
  return true
}

function mapTree(root, ary) {
  if (!root) return;
  root.left && mapTree(root.left, ary);
  ary.push(root.val);
  root.right && mapTree(root.right, ary);
}

// var isValidBST = function (root) {
//   if (!root) return true;
//   return helper(root, root.left, 'left') && helper(root, root.right, 'right')
// };

/**
 * 
 * @param {TreeNode} root 
 * @param {TreeNode} current
 * @param {'left' | 'right'} dir
 * @return {boolean}
 */
function helper(root, current, dir) {
  if (!current) return true;
  if (dir === 'left') {
    if (current.val >= root.val) return false;
    if (current.right && current.right.val > root.val) return false;
  } else {
    if (current.val <= root.val) return false;
    if (current.left && current.left.val < root.val) return false
  }
  return helper(current, current.left, 'left') && helper(current, current.right, 'right')
}


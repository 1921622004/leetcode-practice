/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
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
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  let ary = [];
  (function mapper(node, index) {
    if (!node) return
    ary[index] = node.val;
    mapper(node.left, index * 2 + 1);
    mapper(node.right, index * 2 + 2);
  })(root, 0);
  let isEnd = false;
  for (let i = ary.length - 1; i > -1; i--) {
    let isUndefined = typeof ary[i] === 'undefined';
    if (!isEnd) {
      if (isUndefined) {
        ary.pop();
      } else {
        isEnd = true;
      }
    } else {
      if (isUndefined) ary[i] = null;
    }
  }
  return JSON.stringify(ary);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  data = JSON.parse(data);
  if (!data.length) return null;
  let root = (function mapper(index) {
    if (data[index] === null) return null
    if (index >= data.length) return null;
    let node = new TreeNode(data[index]);
    node.left = mapper(index * 2 + 1);
    node.right = mapper(index * 2 + 2);
    return node
  })(0);
  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end


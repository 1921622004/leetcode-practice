/*
 * @lc app=leetcode.cn id=508 lang=javascript
 *
 * [508] 出现次数最多的子树元素和
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
var findFrequentTreeSum = function (root) {
  let maxCount = 0;
  let map = {};
  let res = [];
  (function helper(node) {
    if (!node) return 0;
    let curCount = helper(node.left) + helper(node.right) + node.val;
    map[curCount] = (map[curCount] || 0) + 1;
    return curCount
  })(root);
  for (let key in map) {
    if (map[key] > maxCount) {
      maxCount = map[key];
      res = [parseInt(key)]
    } else if (map[key] === maxCount) {
      res.push(parseInt(key))
    }
  }
  return res
};
// @lc code=end

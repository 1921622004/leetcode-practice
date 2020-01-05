/*
 * @lc app=leetcode.cn id=480 lang=javascript
 *
 * [480] 滑动窗口中位数
 */

const AVLTree = require('./def/AVLTree');

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function (nums, k) {
  let tree = new AVLTree();
  let res = [];
  let isEven = k % 2 === 0;
  for (let i = 0; i < k; i++) {
    tree.insert(nums[i]);
  }
  res.push(isEven ? (tree.root.left.val + tree.root.right.val) / 2 : tree.root.val);
  for (let i = k; i < nums.length; i++) {
    tree.remove(nums[i - k]);
    tree.insert(nums[i]);
    res.push(isEven ? (tree.root.left.val + tree.root.right.val) / 2 : tree.root.val);
  }
  return res
};
// @lc code=end

console.log(medianSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));

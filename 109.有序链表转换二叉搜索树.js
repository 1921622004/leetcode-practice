/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  let ary = [];
  while (head) {
    ary.push(head.val);
    head = head.next;
  }
  let root = (function helper(ary) {
    if (!ary.length) return null
    let middle = Math.floor(ary.length / 2);
    let leftAry = ary.slice(0, middle);
    let rightAry = ary.slice(middle + 1, ary.length);
    let node = new TreeNode(ary[middle]);
    node.left = helper(leftAry);
    node.right = helper(rightAry)
    return node
  })(ary)
  return root;
};
// @lc code=end


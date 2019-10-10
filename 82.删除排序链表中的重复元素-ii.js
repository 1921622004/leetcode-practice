/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let lastSameNode = null;
  let prev = null
  while (head) {
    if (head.val === lastSameNode.val) {
      prev.next = head.next;
    } else {
      head = head.next;
    }
  }
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=817 lang=javascript
 *
 * [817] 链表组件
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
 * @param {number[]} G
 * @return {number}
 */
var numComponents = function (head, G) {
  let node = head;
  let count = 0;
  let flag = false;
  while (node) {
    if (G.includes(node.val)) {
      if (flag) {
        node = node.next;
        continue
      };
      flag = true;
      count++;
    } else {
      flag = false
    }
    node = node.next;
  }
  return count
};
// @lc code=end


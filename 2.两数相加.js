/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


var addTwoNumbers = function (l1, l2) {
  let sum = 0;
  let root = new ListNode(null);
  let temp = root;
  let val1 = l1 && l1.val ? l1.val : 0;
  let val2 = l2 && l2.val ? l2.val : 0;
  while (val1 !== null || val2 !== null) {
    let cur = (val1 || 0) + (val2 || 0) + sum;
    sum = cur > 9 ? 1 : 0;
    temp.val = cur % 10;
    if ((l1 && l1.next) || (l2 && l2.next)) {
      temp.next = new ListNode(null);
      temp = temp.next;
      if (l1 && l1.next) {
        val1 = l1.next.val
        l1 = l1.next;
      } else {
        val1 = 0
      }
      if (l2 && l2.next) {
        val2 = l2.next.val;
        l2 = l2.next;
      } else {
        val2 = 0;
      }
    } else {
      if (cur >= 10) {
        temp.next = new ListNode(1);
      } else {
        temp.next = null;
      }
      break
    }
  }
  return root
};




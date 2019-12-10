/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head) return null
  let ary = [];
  let temp = head;
  while (temp) {
    ary.push(temp);
    temp = temp.next;
  }
  let step = k % ary.length;
  if (ary.length === 1 || step === 0) return head;
  let node = ary[ary.length - step];
  ary[ary.length - step - 1].next = null;
  ary[ary.length - 1].next = ary[0];
  return node
};
// @lc code=end


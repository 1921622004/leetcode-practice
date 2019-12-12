/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let temp1 = l1, temp2 = l2;
  let res = new ListNode(null);
  let temp = res;
  while (temp1 || temp2) {
    if (temp1 && temp2) {
      if (temp1.val >= temp2.val) {
        temp.next = temp2;
        temp2 = temp2.next;
      } else {
        temp.next = temp1;
        temp1 = temp1.next;
      }
    } else if (!temp1) {
      temp.next = temp2;
      temp2 = temp2.next;
    } else {
      temp.next = temp1;
      temp1 = temp1.next;
    }
    temp = temp.next;
  }
  return res.next;
};
// @lc code=end

console.log(mergeTwoLists(null, { val: 0, next: null }));

/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let ary1 = [], ary2 = [];
  let tempA = headA;
  while (headA) {
    ary1.push(headA);
    headA = headA.next;
  }
  while (headB) {
    ary2.push(headB);
    headB = headB.next;
  }
  let dif = Math.abs(ary2.length - ary1.length);
  let maxLen = Math.max(ary2.length, ary1.length);
  let order = null;

  for (let i = 1; (i + dif - 1) <= maxLen; i++) {
    if (!ary1[ary1.length - i] || !ary2[ary2.length - i]) {
      order = ary1.length - i + 1;
      break
    }
    if (ary1[ary1.length - i] !== ary2[ary2.length - i]) {
      order = ary1.length - i + 1;
      break
    }
  }
  while (order !== null) {
    if (order === 0) {
      return tempA
    }
    tempA = tempA.next;
    order--;
  }
  return null;
};

/*
 * @lc app=leetcode.cn id=147 lang=javascript
 *
 * [147] 对链表进行插入排序
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
  let retHead = head
  let cur = head
  let listLen = 0
  while (cur) {
    if (cur.next) {
      cur.next.prev = cur
    }
    cur = cur.next
    listLen++
  }
  if (listLen <= 1) return retHead
  let j = 0 // 循环次数
  let maxNode = head
  let tail
  while (j < listLen - 1) {
    cur = head
    for (let i = 0; i < listLen - j - 1; i++) {
      cur = cur.next
      tail = cur
      if (cur.val >= maxNode.val) {
        maxNode = cur
      }
    }
    if (maxNode !== tail) {
      if (maxNode.prev) {
        maxNode.prev.next = maxNode.next
        if (maxNode.next) maxNode.next.prev = maxNode.prev
      } else {
        head = head.next
        maxNode.next.prev = null
      }
      if (tail.next) {
        maxNode.next = tail.next
        tail.next.prev = maxNode
        tail.next = maxNode
        maxNode.prev = tail
      } else {
        tail.next = maxNode
        maxNode.prev = tail
        maxNode.next = null
      }
    }
    maxNode = head
    j++
  }
  return head
};
// @lc code=end
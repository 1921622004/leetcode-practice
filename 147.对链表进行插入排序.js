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
var insertionSortList = function(head) {
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
  while (j < listLen) {
    for (let i = 0; i < listLen - j - 1; i++) {
      cur = head.next
      tail = cur
      if (cur.val >= maxNode.val) {
        maxNode = cur
      }
    }
    if (maxNode.prev) {
      maxNode.prev.next = maxNode.next
      maxNode.next.prev = maxNode.prev
    } else {
      head = maxNode.next
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
    j++
  }
  return retHead
};
// @lc code=end

console.log(insertionSortList({
  val: -1,
  next: {
    val: 5,
    next: {
      val: 3,
      next: {
        val: 5,
        next: {
          val: 0,
          next: null
        }
      }
    }
  }
}))
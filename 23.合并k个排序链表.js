/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length === 1) return lists[0];
  let res = new ListNode(null);
  let temp = res;
  while (lists.length) {
    let min = Number.MAX_SAFE_INTEGER;
    let minIdx = -1;
    for (let i = 0; i < lists.length; i++) {
      if (!lists[i]) continue
      if (lists[i].val <= min) {
        minIdx = i;
        min = lists[i].val
      }
    }
    if (minIdx === -1) break;
    temp.next = lists[minIdx];
    if (lists[minIdx].next) {
      lists[minIdx] = lists[minIdx].next;
    } else {
      lists.splice(minIdx, 1)
    }
    temp = temp.next;
  }
  return res.next;
};


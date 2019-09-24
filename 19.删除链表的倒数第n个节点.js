/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let first = head, second = head;
    while (n > 0) {
        if (!first) return head;
        first = first.next;
        n--;
    }
    if (!first) return head.next;
    while (first && first.next) {
        first = first.next;
        second = second.next;
    }
    second.next = second.next.next;
    return head
};


var removeNthFromEnd1 = function (head, n) {
    let ary = [];
    let temp = head;
    let prev = null;
    while (head) {
        ary.push({ prev, head, next: head.next });
        prev = head;
        head = head.next;
    }
    let target = ary[ary.length - n];
    if (target) {
        if (target.prev) {
            target.prev.next = target.next;
        } else {
            temp = target.next;
        }
    }
    return temp;
};



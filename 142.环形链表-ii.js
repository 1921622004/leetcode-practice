/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
var detectCycle = function (head) {
    let temp1 = head, temp2 = head, temp3 = null;
    while (temp2 && temp2.next) {
        temp1 = temp1.next;
        temp2 = temp2.next.next;
        if (temp1 === temp2) {
            temp3 = temp1;
            break
        }
    }
    if (!temp3) return null
    while(temp3 !== head) {
        head = head.next;
        temp3 = temp3.next;
    }
    return head
};


var detectCycle2 = function (head) {
    let temp = head;
    let ary = [];
    while (temp) {
        if (
            ary.indexOf(temp) > -1
        ) return temp
        ary.push(temp)
        temp = temp.next;
    }
    return null
};
// @lc code=end


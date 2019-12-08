/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start

class Heap {
  constructor(ary) {
    this.items = ary;
    this.buildHeap();
  }

  buildHeap() {
    if (this.items.length === 0) return;
    for (let i = Math.floor(this.items.length / 2); i >= 0; i--) {
      this.percolateDown(i)
    }
  }

  getMax() {
    return this.items[0]
  }

  percolateDown(index) {
    let child, cur = this.items[index];
    for (; index * 2 <= this.items.length; index = child) {
      child = 2 * index + 1;
      if (this.items[child] < this.items[child + 1]) {
        child++;
      }
      if (this.items[child] > cur) {
        this.items[index] = this.items[child];
      } else break;
    }
    this.items[index] = cur;
  }

  insert(item) {
    let index = this.items.length;
    this.items[index] = item;
    let parent;
    while ((parent = Math.floor((index - 1) / 2)) >= 0) {
      if (this.items[parent] < this.items[index]) {
        let temp = this.items[parent];
        this.items[parent] = this.items[index];
        this.items[index] = temp;
      }
      index = parent;
    }
  }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if (nums.length === 0 || k === 0) return []
  let ary = [];
  for (let i = 0; i < k; i++) {
    ary.push(nums[i])
  }
  let heap = new Heap(ary);
  let res = [heap.getMax()];
  let prev = 0;
  for (let i = k; i < nums.length; i++) {
    let idx = heap.items.indexOf(nums[prev]);
    heap.items.splice(idx, 1);
    heap.buildHeap();
    heap.insert(nums[i]);
    res.push(heap.getMax());
    prev++;
  }
  return res
};

// @lc code=end

console.log(maxSlidingWindow([1, -1], 1));

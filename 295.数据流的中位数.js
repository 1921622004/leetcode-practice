/*
 * @lc app=leetcode.cn id=295 lang=javascript
 *
 * [295] 数据流的中位数
 */

/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.ary = [];
  this.index = -1;
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  let insertIdx = 0;
  if (!this.ary.length) {
    this.ary.push(num);
    this.index = 0;
    return
  }
  for (let i = 0; i < this.ary.length; i++) {
    if (this.ary[i] >= num) {
      break
    } else {
      insertIdx++;
    }
  }
  this.ary.splice(insertIdx, 0, num);
  if (!(this.ary.length % 2)) this.index++;
  // console.log(this.ary, this.index);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (!this.ary.length) return 0
  if (this.ary.length % 2) {
    return this.ary[this.index]
  } else {
    return (this.ary[this.index] + this.ary[this.index - 1]) / 2
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end


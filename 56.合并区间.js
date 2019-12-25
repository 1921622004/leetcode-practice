/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length === 0) return [];
  intervals.sort((a, b) => a[0] - b[0]);
  let res = [];
  let curMin = intervals[0][0];
  let curMax = intervals[0][1];
  for (let i = 0; i < intervals.length; i++) {
    let curInterval = intervals[i];
    if (curInterval[0] > curMax) {
      res.push([curMin, curMax]);
      curMin = curInterval[0];
      curMax = curInterval[1];
      if (i === intervals.length - 1) {
        res.push(curInterval)
      }
    } else {
      curMin = Math.min(curMin, curInterval[0]);
      curMax = Math.max(curMax, curInterval[1]);
      if (i === intervals.length - 1) {
        res.push([curMin, curMax])
      }
    }
  }
  return res
};
// @lc code=end

// console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]));

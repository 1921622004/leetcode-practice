/*
 * @lc app=leetcode.cn id=436 lang=javascript
 *
 * [436] 寻找右区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function (intervals) {
  let res = [];
  for (let i = 0; i < intervals.length; i++) {
    let cur = intervals[i];
    let min = cur[1];
    let bound;
    let idx = -1;
    for (let j = 0; j < intervals.length; j++) {
      if (i === j) continue;
      let curLeft = intervals[j][0];
      if (curLeft >= min) {
        if (!bound || curLeft < bound) {
          bound = curLeft;
          idx = j
        }
      }
    }
    res[i] = idx
  }
  return res
};
// @lc code=end

// console.log(findRightInterval([[3, 4], [2, 3], [1, 2]]));


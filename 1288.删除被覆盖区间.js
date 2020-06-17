/*
 * @lc app=leetcode.cn id=1288 lang=javascript
 *
 * [1288] 删除被覆盖区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
  if (!intervals.length) return 0
  intervals.sort((a,b) => {
      if (a[0] === b[0]) {
          return a[1] - b[1]
      } else return a[0] - b[0]
  });
  let count = 1;
  let [minVal, maxVal] = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
      const [a, b] = intervals[i];
      if (a === minVal) {
          maxVal = b;
          continue
      }
      if (a > maxVal) {
          count++;
          minVal = a;
          maxVal = b;
          continue
      } else {
          if (b <= maxVal) continue;
          minVal = a;
          maxVal = b;
          count++;
          continue;
      }
  }
  return count
};
// @lc code=end


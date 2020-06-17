/*
 * @lc app=leetcode.cn id=1014 lang=javascript
 *
 * [1014] 最佳观光组合
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function (A) {
  if (!A.length) return 0;
  let ret = Number.MIN_SAFE_INTEGER, left = A[0] + 0;
  for (let i = 1; i < A.length; i++) {
    ret = Math.max(ret, left + A[i] - i);
    left = Math.max(left, A[i] + i);
  }
  return ret
};
// @lc code=end


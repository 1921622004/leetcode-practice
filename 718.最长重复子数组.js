/*
 * @lc app=leetcode.cn id=718 lang=javascript
 *
 * [718] 最长重复子数组
 */
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function (A, B) {
  let dep = [];
  let max = 0
  for (let i = 0; i <= A.length; i++) {
    dep[i] = [];
    for (let j = 0; j <= B.length; j++) {
      if (i === 0 || j === 0) {
        dep[i][j] = 0;
      } else {
        if (A[i - 1] === B[j - 1]) {
          dep[i][j] = dep[i - 1][j - 1] + 1;
          max = Math.max(dep[i][j], max)
        } else {
          dep[i][j] = 0
        }
      }
    }
  }
  return max
};


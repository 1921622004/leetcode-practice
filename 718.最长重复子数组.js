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
var findLength = function (A, B, a = 0) {
  if (!A.length || !B.length) return a;
  if (A[A.length - 1] === B[B.length - 1]) {
    return Math.max(findLength(A.slice(0, A.length - 1), B.slice(0, B.length - 1), a + 1), a + 1)
  } else {
    return Math.max(
      findLength(A.slice(0, A.length - 1), B),
      findLength(A, B.slice(0, B.length - 1)),
      a
    )
  }
};

console.log(findLength([0, 0, 0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]));

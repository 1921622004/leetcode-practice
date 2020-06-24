/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (!matrix.length) return []
  const retArr = [];
  let flag = 0;
  for (; flag >= 0;) {
    switch (flag % 4) {
      case 0:
        retArr.push(...matrix.shift());
        break;
      case 1:
        for (let i = 0; i < matrix.length; i++) {
          retArr.push(matrix[i].pop());
        }
        break;
      case 2:
        retArr.push(...matrix.pop().reverse());
        break
      case 3:
        for (let j = matrix.length - 1; j >= 0; j--) {
          retArr.push(matrix[j].shift());
        }
        break;
    }
    if (matrix.length && matrix[0].length) {
      flag++;
    } else flag = -1;
  }
  return retArr
};
// @lc code=end

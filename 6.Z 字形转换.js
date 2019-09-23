/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let div = 2 * (numRows - 1);
  if (div === 0) return s
  let pos = [];
  let temp = 0;
  let res = '';
  for (let i = 0; ; i++) {
    let cur = temp + i * div;
    pos.push(cur);
    if (cur >= s.length) break
  }
  for (let j = 0; j < numRows; j++) {
    for (let m = 0; m < pos.length; m++) {
      let leftIndex = pos[m] - j;
      let rightIndex = pos[m] + j;
      if (j === numRows - 1) {
        res += s[leftIndex] ? s[leftIndex] : '';
        continue
      }
      if (leftIndex === rightIndex) {
        res += s[leftIndex] ? s[leftIndex] : ''
      } else {
        if (s[leftIndex]) res += s[leftIndex];
        if (s[rightIndex]) res += s[rightIndex];
      }
    }
  }
  return res
};

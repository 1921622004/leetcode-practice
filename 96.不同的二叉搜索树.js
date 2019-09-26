/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  let map = { 1: 1, 2: 2, 0: 1 };
  for (let i = 3; i <= n; i++) {
    map[i] = 0;
    for (let j = 1; j <= i; j++) {
      map[i] += map[j - 1] * map[i - j];
    }
  }
  // console.log(map);
  return map[n]
};


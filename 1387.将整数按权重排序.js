/*
 * @lc app=leetcode.cn id=1387 lang=javascript
 *
 * [1387] 将整数按权重排序
 */

// @lc code=start
/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function (lo, hi, k) {
  const weightMap = { 1: 0 };
  for (let i = 1; i <= hi; i++) weightMap[i] = 0;
  const resultAry = [];
  for (let i = lo; i <= hi; i++) {
    let cur = i;
    dfs(cur, 0);
  }
  function dfs(cur, count) {
    if (cur === 1) return;
    if (weightMap[cur]) return;
    let next;
    if (cur % 2 === 0) {
      next = cur / 2;
    } else {
      next = cur * 3 + 1;
    }
    if (weightMap[next]) {
      weightMap[cur]
    }
    dfs(next, count + 1);
  }
  return resultAry[k - 1];
};
// @lc code=end

console.log(getKth(12, 15, 2));
console.log(getKth(1, 1, 1));
console.log(getKth(7, 11, 4));
console.log(getKth(10, 20, 5));
console.log(getKth(1, 1000, 777));




/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let res = [];
  (function helper(cur, idx) {
    if (cur.length === k) {
      res.push(cur);
      return
    }
    for (let i = idx; i < n; i++) {
      helper([...cur, i + 1], i + 1)
    }
  })([], 0)
  return res
};


var combine = function (n, k) {
  let res = [];
  (function helper(cur, idx) {
    if (cur.length === k) {
      res.push([...cur]);
      return
    }
    for (let i = idx; i < n; i++) {
      cur.push(i + 1);
      helper(cur, i + 1);
      cur.pop();
    }
  })([], 0)
  return res
};
// @lc code=end


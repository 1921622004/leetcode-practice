/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  let s = Math.floor(Math.sqrt(n));
  let res = Number.MAX_SAFE_INTEGER;
  (function helper(prev, count) {
    if (prev > n || count >= res) return;
    if (prev === n) {
      res = Math.min(res, count);
    }
    for (let i = s; i > 0; i--) {
      helper(i * i + prev, count + 1);
    }
  })(0, 0);
  return res
};


var numSquares = function (n) {
  let s = Math.floor(Math.sqrt(n));
  let sqrtNums = [];
  for (let i = 1; i <= s; i++) {
    sqrtNums.push(i * i)
  };
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    let count = Number.MAX_SAFE_INTEGER;
    for (let j = sqrtNums.length - 1; j > -1; j--) {
      let temp = i - sqrtNums[j];
      if (temp < 0) continue;
      count = Math.min(count, dp[temp] + 1);
    }
    dp[i] = count;
  }
  return dp[dp.length - 1]
}
// console.log(numSquares(13));

// @lc code=end

/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (amount === 0) return 0;
  coins.sort((a, b) => a - b);
  const dp = [0];
  for (let curAmount = 1; curAmount <= amount; curAmount++) {
    let min = -1;
    for (let i = 0; i < coins.length; i++) {
      let coin = coins[i];
      if (dp[curAmount - coin] > -1) {
        if (min === -1) {
          min = dp[curAmount - coin] + 1;
        } else {
          min = Math.min(min, dp[curAmount - coin] + 1);
        }
      }
    }
    dp[curAmount] = min;
  }
  return dp[dp.length - 1] || -1
};
// @lc code=end

console.log(coinChange([1, 2, 5], 11));

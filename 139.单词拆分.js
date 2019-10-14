/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  return helper(s, wordDict)
};

let count = 0;

/**
 * 
 * @param {String} str 
 * @param {string[]} wordDict
 */
function helper(str, wordDict) {
  let dp = [true];
  for (let i = 1; i <=  str.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDict.indexOf(str.slice(j,i)) > -1) {
        dp[i] = true;
        break
      } else {
        dp[i] = false;
      }
    }
  }
  return dp[str.length]
}
// @lc code=end



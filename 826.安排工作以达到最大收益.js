/*
 * @lc app=leetcode.cn id=826 lang=javascript
 *
 * [826] 安排工作以达到最大收益
 */

// @lc code=start
/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function (difficulty, profit, worker) {
  let ary = [];
  for (let i = 0; i < difficulty.length; i++) {
    ary.push({ difficulty: difficulty[i], profit: profit[i] });
  }
  ary.sort((a, b) => {
    if (a.difficulty === b.difficulty) {
      return a.profit - b.profit
    }
    return a.difficulty - b.difficulty
  });
  let res = 0;
  for (let i = 0; i < worker.length; i++) {
    let max = 0;
    let curMaxDifficulty = worker[i];
    for (let j = 0; j < ary.length; j++) {
      if (ary[j].difficulty > curMaxDifficulty) break;
      max = Math.max(max, ary[j].profit);
    }
    res += max;
  }
  return res
};
// @lc code=end

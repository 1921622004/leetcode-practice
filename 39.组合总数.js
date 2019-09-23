/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target, res = [], cur = [], num = 0) {
  if (target <= 0) return [];
  for (let i = num; i < candidates.length; i++) {
    let newTarget = target - candidates[i];
    if (newTarget === 0) {
      flag = true;
      res.push([...cur, candidates[i]]);
    }
    combinationSum(candidates, newTarget, res, [].concat(...cur, candidates[i]), i)
  }
  return res;
};

/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  if (target < 0) return [];
  candidates = candidates.sort();
  return helper(candidates, target, [], [], 0)
};

function helper(candidates, target, res = [], cur = [], num = 0) {
  if (target < 0) return [];
  let last = null;
  for (let i = num; i < candidates.length; i++) {
    let curNumber = candidates[i];
    if (curNumber === last) continue;
    last = curNumber;
    let newTarget = target - curNumber;
    if (newTarget === 0) {
      res.push([...cur, candidates[i]]);
    }
    helper(candidates, newTarget, res, [].concat(...cur, candidates[i]), i + 1)
  }
  return res;
}

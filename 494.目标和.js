/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function (nums, S) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];
    if (i === 0) {
      if (cur === 0) {
        map.set(0, 2);
      } else {
        map.set(cur, 1);
        map.set(0 - cur, 1);
      }
    } else {
      let newMap = new Map();
      for (let [key, curCount] of map) {
        if (cur === 0) {
          newMap.set(key, curCount * 2)
        } else {
          let plusRes = key + cur;
          let newMapCount = newMap.get(plusRes);
          if (newMapCount) {
            newMap.set(plusRes, newMapCount + (curCount || 0))
          } else {
            newMap.set(plusRes, curCount || 1);
          }
          let minusRes = key - cur;
          let newCount = newMap.get(minusRes);
          if (newCount) {
            newMap.set(minusRes, newCount + (curCount || 0))
          } else {
            newMap.set(minusRes, curCount || 1)
          }
        }
      }
      map = newMap;
    }
  }
  return map.get(S) || 0
};
// @lc code=end

// console.log(findTargetSumWays([1, 1, 1, 1, 1], 3));

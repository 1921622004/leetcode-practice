/*
 * @lc app=leetcode.cn id=846 lang=javascript
 *
 * [846] 一手顺子
 */

// @lc code=start
/**
 * @param {number[]} hand
 * @param {number} W
 * @return {boolean}
 */
var isNStraightHand = function (hand, W) {
  if (W === 0) return false;
  if (W === 1) return true;
  if (hand.length % W !== 0) return false;
  let map = {};
  for (let i = 0; i < hand.length; i++) map[hand[i]] = (map[hand[i]] || 0) + 1;
  let count = 0, keys = Object.keys(map), cur = keys[0], totalCount = 0;
  while (count <= W && totalCount < hand.length) {
    if (count === W) {
      count = 0;
      keys = Object.keys(map);
      cur = keys[0];
      continue
    } else {
      if (!map[cur]) return false
      if (map[cur] === 1) delete map[cur];
      else map[cur]--;
      cur++;
      count++;
      totalCount++;
    }
  }
  return true
};
// @lc code=end

// console.log(isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 9], 3));

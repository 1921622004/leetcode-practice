/*
 * @lc app=leetcode.cn id=554 lang=javascript
 *
 * [554] 砖墙
 */

// @lc code=start
/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function (wall) {
  let height = wall.length;
  let width = wall[0].length;
  let map = {};
  for (let i = 0; i < height; i++) {
    const curLevel = wall[i];
    let sum = 0;
    for (let j = 0; j < curLevel.length - 1; j++) {
      sum += curLevel[j];
      map[sum] = (map[sum] || 0) + 1;
    }
  }
  const keys = Object.keys(map);
  if (keys.length === 0) return height;
  return height - Math.max(...Object.values(map));
};
// @lc code=end

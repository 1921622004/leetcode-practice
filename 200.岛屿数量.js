/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let res = 0;
  /**
   * 
   * @param {Number} i 
   * @param {Number} j 
   */
  function mark(i, j) {
    if (!grid[i] || grid[i][j] !== '1') return;
    grid[i][j] = '0';
    mark(i - 1, j);
    mark(i + 1, j);
    mark(i, j - 1);
    mark(i, j + 1);
  }
  for (let i = 0; i < grid.length; i++) {
    let curRow = grid[i];
    for (let j = 0; j < curRow.length; j++) {
      let s = curRow[j];
      if (s === '1') {
        mark(i, j);
        res++;
      }
    }
  }
  return res
};
// @lc code=end


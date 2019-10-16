/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let max = 0;
  for (let i = 0; i < grid.length; i++) {
    let curRow = grid[i];
    for (let j = 0; j < curRow.length; j++) {
      if (curRow[j] === 1) {
        let res;
        if ((res = markAndGetArea(grid, i, j)) > max) {
          max = res;
        }
      }
    }
  }
  return max
};

/**
 * @param {number[][]} grid
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
function markAndGetArea(grid, i, j) {
  let res = { count: 1 };

  helper(grid, i, j, res);
  return res.count
}

function helper(grid, i, j, res) {
  grid[i][j] = 'M';
  if (grid[i - 1] && grid[i - 1][j] === 1) {
    grid[i - 1][j] = 'M';
    res.count++;
    helper(grid, i - 1, j, res)
  }
  if (grid[i + 1] && grid[i + 1][j] === 1) {
    grid[i + 1][j] = 'M';
    res.count++;
    helper(grid, i + 1, j, res)
  }
  if (grid[i][j + 1] === 1) {
    grid[i][j + 1] = 'M';
    res.count++;
    helper(grid, i, j + 1, res)
  }
  if (grid[i][j - 1] === 1) {
    grid[i][j - 1] = 'M';
    res.count++;
    helper(grid, i, j - 1, res)
  }
}

// @lc code=end


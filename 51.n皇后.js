/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const res = [];
  let board = new Array(n);
  for (let i = 0; i < n; i++) {
    board[i] = new Array(n).fill('.');
  }
  helper(board, res, 0, [], [], []);
  return res;
};

/**
 * 
 * @param {Number[][]} board 
 * @param {Array} res 
 * @param {Number} index 
 * @param {Number[]} row 
 * @param {Number[]} left 
 * @param {Number[]} right 
 */
function helper(board, res, index, row, left, right) {
  if (index === board.length) {
    res.push(board.map((item) => item.join('')));
    return
  }
  let curRow = board[index];
  for (let i = 0; i < curRow.length; i++) {
    if (row.indexOf(i) > -1 || left.indexOf(i + index) > -1 || right.indexOf(i - index) > -1) {
      continue
    } else {
      curRow[i] = 'Q';
      helper(board, res, index + 1, [...row, i], [...left, i + index], [...right, i - index]);
      curRow[i] = '.';
    }
  }
}

function deepClone(source) {
  if (typeof source !== 'object') return source;
  let res = Array.isArray(source) ? [] : {};
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      res[key] = deepClone(source[key]);
    }
  }
  return res;
}

// @lc code=end


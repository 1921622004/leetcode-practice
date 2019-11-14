/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let cur = board[i][j];
      let curCol = [...board[i]];
      curCol.splice(j, 1);
      curCol = curCol.filter((item) => item !== '.');
      if (curCol.indexOf(cur) > -1) return false
      let curRow = board.map((item) => item[j]);
      curRow.splice(i, 1);
      curRow = curRow.filter((item) => item !== '.');
      if (curRow.indexOf(cur) > -1) return false;
      let curBoard = getArray(board, i, j);
      if (curBoard.indexOf(cur) > -1) return false;
    }
  }
  return true
};

/**
 * 
 * @param {character[][]} board 
 * @param {Number} i 
 * @param {Number} j
 * @returns {character[]} 
 */
function getArray(board, i, j) {
  let rowStart, rowEnd, colStart, colEnd, res = [];
  if (i < 3) {
    rowStart = 0;
    rowEnd = 2;
  } else if (i < 6) {
    rowEnd = 5;
    rowStart = 3;
  } else {
    rowEnd = 8;
    rowStart = 6;
  }
  if (j < 3) {
    colStart = 0;
    colEnd = 2;
  } else if (j < 6) {
    colEnd = 5;
    colStart = 3;
  } else {
    colEnd = 8;
    colStart = 6;
  }
  for (; rowStart <= rowEnd; rowStart++) {
    for (let col = colStart; col <= colEnd; col++) {
      if (rowStart === i && col === j) continue
      let cur = board[rowStart][col];
      if (cur === '.') continue
      res.push(cur)
    }
  }
  return res;
}
// @lc code=end

// console.log(isValidSudoku([
//   ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//   ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//   [".", "9", "8", ".", ".", ".", ".", "6", "."],
//   ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//   ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//   ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//   [".", "6", ".", ".", ".", ".", "2", "8", "."],
//   [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//   [".", ".", ".", ".", "8", ".", ".", "7", "9"]
// ]))

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let ary = [];
  for (let i = 0; i <= m; i++) {
    ary[i] = [];
    for (let j = 0; j <= n; j++) {
      if (i === 0 || j === 0) {
        ary[i][j] = 0;
        continue
      }
      if (i === 1 || j === 1) {
        ary[i][j] = 1;
        continue
      }
      ary[i][j] = ary[i - 1][j] + ary[i][j - 1];
    }
  }
  return ary[m][n];
};

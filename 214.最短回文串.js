/*
 * @lc app=leetcode.cn id=214 lang=javascript
 *
 * [214] 最短回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
  let j = s.length;
  for (; j > 0; j--) {
    if (isPalindrome(s, j)) {
      break
    }
  }
  if (j === s.length) return s
  return s.slice(j, s.length).split('').reverse().join('') + s
};

function isPalindrome(str, end) {
  let middle = Math.floor(end / 2) - 1;
  for (let i = 0; i <= middle; i++) {
    if (str[i] !== str[end - 1 - i]) {
      return false
    }
  }
  return true
}

// @lc code=end

// console.log(shortestPalindrome('abc'));

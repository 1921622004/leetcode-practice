/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length <= 1) return s
  let dep = [];
  let max = 0;
  let a = '';
  let c = '';
  for (let x = s.length - 1; x > -1; x--) {
    a += s[x];
  }
  for (let i = 0; i <= s.length; i++) {
    dep[i] = [];
    for (let j = 0; j <= a.length; j++) {
      if (i === 0 || j === 0) { dep[i][j] = 0; continue }
      if (s[i - 1] === a[j - 1]) {
        dep[i][j] = dep[i - 1][j - 1] + 1;
        if (dep[i - 1][j - 1] > 0) {
          // console.log(i, j, dep[i - 1][j - 1]);

          let temp = s.slice(i - 1 - dep[i - 1][j - 1], i);
          // console.log(temp);

          if (isPalindrome(temp)) {
            if (temp.length > max) {
              c = temp;
              max = temp.length;
            }
          }
        }
      } else {
        dep[i][j] = 0
      }
    }
  }
  return c || s[0]
};

function isPalindrome(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) return false
  }
  return true
}

// console.log(isPalindrome('ama'));

// console.log(longestPalindrome("bbbbbbbbbbbb"));

// console.log(longestPalindrome("cefbabad"))
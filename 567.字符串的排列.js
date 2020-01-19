/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let ary = new Array(26);
  ary.fill(0);
  for (let i = 0; i < s1.length; i++) {
    ary[s1[i].charCodeAt() - 97]++;
  }
  for (let j = 0; j < (s2.length - s1.length + 1); j++) {
    let ary2 = new Array(26).fill(0);
    for (let k = 0; k < s1.length; k++) {
      let cur = s2[j + k].charCodeAt() - 97;
      ary2[cur]++
    }
    if (isEqual(ary, ary2)) return true
  }
  return false
};

/**
 * 
 * @param {number[]} a 
 * @param {number[]} b 
 */
const isEqual = (a, b) => {
  return a.every((_, index) => {
    return a[index] === b[index]
  })
}
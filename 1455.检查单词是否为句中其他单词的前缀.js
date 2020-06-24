/*
 * @lc app=leetcode.cn id=1455 lang=javascript
 *
 * [1455] 检查单词是否为句中其他单词的前缀
 */

// @lc code=start
/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
  let idx = sentence.split(' ').findIndex((word) => word.startsWith(searchWord));
  return idx > -1 ? idx + 1 : -1
};
// @lc code=end


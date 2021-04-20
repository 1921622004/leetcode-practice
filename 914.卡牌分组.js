/*
 * @lc app=leetcode.cn id=914 lang=javascript
 *
 * [914] 卡牌分组
 */

// @lc code=start
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
  if (deck.length <= 1) return false
  let sortedDeck = deck.sort((a, b) => a - b)
  let repeatLengths = []
  let repeatCount = 1
  let prev = sortedDeck[0]
  let maxRepeat = 1
  for (let i = 1; i < sortedDeck.length; i++) {
    if (sortedDeck[i] !== prev) {
      repeatLengths.push(repeatCount)
      repeatCount = 1
      prev = sortedDeck[i]
    } else {
      repeatCount++
      maxRepeat = Math.max(maxRepeat, repeatCount)
    }
    if (i === sortedDeck.length - 1) {
      repeatLengths.push(repeatCount)
    }
  }
  let usedNums = []
  for (let x = 2; x <= maxRepeat; x++) {
    if (usedNums.includes(usedNums)) continue
    if (usedNums.some(num => num % x === 0)) continue
    if (repeatLengths.every(len => len % x === 0)) return true
  }
  return false
};
// @lc code=end
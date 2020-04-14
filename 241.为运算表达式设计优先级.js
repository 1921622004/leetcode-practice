/*
 * @lc app=leetcode.cn id=241 lang=javascript
 *
 * [241] 为运算表达式设计优先级
 */

// @lc code=start
/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function (input) {
  let idxs = [];
  let regExp = /[\*|\-|\+|\/|]/;
  for (let i = 0; i < input.length; i++) {
    if (regExp.test(input[i])) idxs.push(i);
  };
  function getResult(left, right, sign) {
    switch (sign) {
      case '+':
        return left + right;
      case '-':
        return left - right;
      case '*':
        return left * right;
      case '/':
        return left / right;
    }
  }
  let finalRes = (function mapper(start, end) {
    let res = [];
    let isThereSign = false;
    for (let i = start; i < end; i++) {
      if (!regExp.test(input[i])) continue;
      isThereSign = true;
      let left = mapper(start, i);
      let right = mapper(i + 1, end);
      for (let x = 0; x < left.length; x++) {
        for (let y = 0; y < right.length; y++) {
          res.push(getResult(left[x], right[y], input[i]));
        }
      }
    }
    if (!isThereSign) return [Number(input.slice(start, end))]
    return res
  })(0, input.length);
  return finalRes
};
// @lc code=end


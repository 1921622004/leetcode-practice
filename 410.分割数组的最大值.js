/*
 * @lc app=leetcode.cn id=410 lang=javascript
 *
 * [410] 分割数组的最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function (nums, m) {
  // let sum = [];
  // let prev = 0;
  // for (let i = 0; i < nums.length; i++) {
  //   sum[i] = prev + nums[i];
  // };
  let min = Number.MAX_SAFE_INTEGER;
  if (nums.length === 1) return nums[0];
  (function mapper(prev, left, index) {
    if (left > 1) {
      for (let i = index + 1; i < nums.length; i++) {
        mapper([...prev, nums.slice(index, i)], left - 1, i);
      }
    } else {
      let newAry = [...prev, nums.slice(index)];
      let max = 0;
      console.log(newAry);

      newAry.forEach((item) => {
        max = Math.max(max, item.reduce((prev, next) => prev + next, 0));
      });
      console.log(max);

      min = Math.min(min, max);
    }
  })([], m, 0);
  return min
};
// @lc code=end

// console.log(splitArray([7, 2, 5, 10, 8, 20], 3));

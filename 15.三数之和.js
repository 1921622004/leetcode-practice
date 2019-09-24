/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let res = [];
  nums.sort((a, b) => a - b);
  let level0 = [];
  for (let i = 0; i < nums.length; i++) {
    const num1 = nums[i];
    if (level0.indexOf(num1) > -1) continue;
    level0.push(num1);
    let level1 = [];
    for (let j = i + 1; j < nums.length; j++) {
      const num2 = nums[j];
      if (level1.indexOf(num2) > -1) continue;
      level1.push(num2);
      let left = nums.slice(j + 1);
      let target = 0 - num1 - num2;
      let hasAnswer = false;
      if (target < left[0] || target > left[left.length -1]) continue
      for (let m = 0; m < left.length; m++) {
        if (hasAnswer) break;
        let cur = left[m];
        if (cur > target) break
        if (cur === target) {
          res.push([num1, num2, target]);
          hasAnswer = true;
        }
      }
    }
  }
  return res
};

function binarySearch(ary, target) {
  if (!ary || !ary.length) return false;
  let start = 0, end = ary.length - 1;
  while (end - start >= 0) {
    let middle = start + Math.round((end - start) / 2);
    if (ary[middle] === target) return true;
    if (ary[middle] < target) {
      start = middle;
    } else {
      end = middle;
    }
  }
  return false
}

// console.log(binarySearch([-1, 0, 1, 2], 1));


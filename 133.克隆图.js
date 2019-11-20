/*
 * @lc app=leetcode.cn id=133 lang=javascript
 *
 * [133] 克隆图
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  let queue = [node];
  let newNode = new Node(node.val, []);
  let anotherQueue = [newNode];
  for (let i = 0; i < queue.length; i++) {
    let curNode = queue[i];
    for (let j = 0; j < curNode.neighbors.length; j++) {
      let curNeighbor = curNode.neighbors[j];
      let idx;
      if ((idx = queue.indexOf(curNeighbor)) > -1) {
        anotherQueue[i].neighbors.push(anotherQueue[idx]);
      } else {
        queue.push(curNeighbor);
        let newNeighbor = new Node(curNeighbor.val, []);
        anotherQueue[i].neighbors.push(newNeighbor);
        anotherQueue.push(newNeighbor);
      }
    }
  }
  return anotherQueue[0] || null
};
// @lc code=end


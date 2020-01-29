class RedBlackTreeNode {
  /**
   * 
   * @param {number} val 
   */
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.color = 0;
    this.parent = null;
  }
}

module.exports = RedBlackTreeNode;
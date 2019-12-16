const TreeNode = require('./TreeNode');

class AVLTree {
  constructor() {
    this.root = null;
  }

  /**
   * @param {Number} val
   */
  insert(val) {
    this.root = this._insert(val, this.root);
  }

  /**
   * 
   * @param {Number} val 
   * @param {TreeNode} node 
   */
  _insert(val, node) {
    if (node === null) {
      return new TreeNode(val);
    }
    if (node.val > val) {
      node.left = this._insert(val, node.left)
    } else if (node.val < val) {
      node.right = this.insert(val, node.right);
    } else;
    return this.balance(node);
  }

  remove(val) {

  }

  /**
   * 
   * @param {TreeNode} node 
   * @returns {TreeNode}
   */
  balance(node) {
    if (noed === null) return node;
    let leftChildHeight = this._getHeight(node.left);
    let rightChildHeight = this._getHeight(node.right);
    if (leftChildHeight - rightChildHeight > 1) {
      if (this._getHeight(node.left.left) >= this._getHeight(node.left.right)) {
        node = this.rotateWithLeftChild(node);
      } else {
        node = this.doubleRotateWithLeftChild(node)
      }
    } else if (rightChildHeight - leftChildHeight > 1) {
      if (this._getHeight(node.right.right) > this._getHeight(node.right.left)) {
        node = this.rotateWithRightChild(node);
      } else {
        node = this.doubleRotateWithRightChild(node);
      }
    }
    node.height = Math.max(leftChildHeight, rightChildHeight) + 1;
    return node
  }

  /**
   * 
   * @param {TreeNode} node 
   * @returns {TreeNode}
   */
  rotateWithLeftChild(node) {
    let nodeLeft = node.left;
    node.left = nodeLeft.right;
    nodeLeft.right = node;
    node.height = Math.max(this._getHeight(node.left), this._getHeight(node.right)) + 1;
    nodeLeft.height = Math.max(this._getHeight(nodeLeft.left), this._getHeight(nodeLeft.right)) + 1;
    return nodeLeft
  }

  /**
   * 
   * @param {TreeNode} node 
   * @returns {TreeNode}
   */
  rotateWithRightChild(node) {
    let nodeRight = node.right;
    node.right = nodeRight.left;
    nodeRight.left = node;
    node.height = Math.max(this._getHeight(node.left) + this._getHeight(node.right)) + 1;
    nodeRight.height = Math.max(this._getHeight(nodeRight.left) + this._getHeight(nodeRight.right)) + 1;
    return nodeRight
  }

  /**
   * 
   * @param {TreeNode} node 
   * @returns {TreeNode}
   */
  doubleRotateWithLeftChild(node) {
    node.left = this.rotateWithRightChild(node.left);
    return this.rotateWithLeftChild(node)
  }

  /**
   * 
   * @param {TreeNode} node 
   * @returns {TreeNode}
   */
  doubleRotateWithRightChild(node) {
    node.right = this.rotateWithLeftChild(node.right);
    return this.rotateWithRightChild(node);
  }

  /**
   * 
   * @param {TreeNode} node 
   * @returns {Number}
   */
  _getHeight(node) {
    return node === null ? -1 : node.height;
  }
}

module.exports = AVLTree
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
      node.right = this._insert(val, node.right);
    } else;
    return this.balance(node);
  }

  remove(val) {
    this.root = this._remove(val, this.root);
  }

  /**
   * 
   * @param {Number} val 
   * @param {TreeNode} node 
   * @returns {TreeNode}
   */
  _remove(val, node) {
    if (!node) return node;
    if (node.val > val) {
      node.left = this._remove(val, node.left)
    } else if (node.val < val) {
      node.right = this._remove(val, node.right)
    } else if (node.left && node.right) {
      node.val = this.findMin(node.right).val;
      node.right = this._remove(node.val, node.right);
    } else if (node.left) {
      return this.balance(node.left)
    } else if (node.right) {
      return this.balance(node.right);
    } else {
      return null
    }
    return this.balance(node);
  }

  /**
   * 
   * @param {TreeNode} node 
   * @returns {TreeNode}
   */
  balance(node) {
    if (node === null) return node;
    let leftChildHeight = this._getHeight(node.left);
    let rightChildHeight = this._getHeight(node.right);
    if (leftChildHeight - rightChildHeight > 1) {
      if (this._getHeight(node.left.left) >= this._getHeight(node.left.right)) {
        node = this.rotateRight(node);
      } else {
        node = this.doubleRotateWithRightChild(node);
      }
    } else if (rightChildHeight - leftChildHeight > 1) {
      if (this._getHeight(node.right.right) > this._getHeight(node.right.left)) {
        node = this.rotateLeft(node);
      } else {
        node = this.doubleRotateWithLeftChild(node);
      }
    }
    node.height = Math.max(this._getHeight(node.left), this._getHeight(node.right)) + 1;
    return node
  }

  /**
   * 
   * @param {TreeNode} node 
   * @returns {TreeNode}
   */
  rotateRight(node) {
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
  rotateLeft(node) {
    let nodeRight = node.right;
    node.right = nodeRight.left;
    nodeRight.left = node;
    node.height = Math.max(this._getHeight(node.left), this._getHeight(node.right)) + 1;
    nodeRight.height = Math.max(this._getHeight(nodeRight.left), this._getHeight(nodeRight.right)) + 1;
    return nodeRight
  }

  /**
   * 
   * @param {TreeNode} node 
   * @returns {TreeNode}
   */
  doubleRotateWithRightChild(node) {
    node.left = this.rotateLeft(node.left);
    return this.rotateRight(node);
  }

  /**
   * 
   * @param {TreeNode} node 
   * @returns {TreeNode}
   */
  doubleRotateWithLeftChild(node) {
    node.right = this.rotateRight(node.right);
    return this.rotateLeft(node);
  }

  /**
   * 
   * @param {TreeNode} node 
   * @returns {Number}
   */
  _getHeight(node) {
    return node === null ? -1 : node.height;
  }

  /**
   * 
   * @param {TreeNode} node 
   * @returns {TreeNode}
   */
  findMin(node) {
    if (node === null) {
      return null
    } else if (node.left === null) {
      return node
    } else {
      return this.findMin(node.left)
    }
  }
}

module.exports = AVLTree;

// let t = new AVLTree();
// t.insert(1);
// t.insert(2);
// t.insert(3);
// t.insert(4);
// t.insert(5);
// t.insert(6);
// t.insert(7);

// t.remove(5);
// t.remove(2);
// // t.insert(16);
// console.log(t);

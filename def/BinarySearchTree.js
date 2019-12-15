const TreeNode = require('./TreeNode');

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /**
   * 
   * @param {Number} val 
   * @returns {boolean}
   */
  contains(val) {
    return this._contains(val, this.root)
  }

  /**
   * 
   * @param {Number} val 
   * @param {TreeNode} node 
   */
  _contains(val, node) {
    if (!node) return false;
    if (node.val === val) {
      return true
    } else if (node.val > val) {
      return this._contains(val, node.right)
    } else {
      return this._contains(val, node.left)
    }
  }

  /**
   * @returns {Number}
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

  /**
   * @returns {Number}
   */
  findMax() {

  }

  /**
   * 
   * @param {Number} val 
   */
  insert(val) {
    this.root = this._insert(val, this.root)
  }

  /**
   * @param {Number} val
   * @param {TreeNode} node
   * @returns {TreeNode}
   */
  _insert(val, node) {
    if (node === null) {
      return new TreeNode(val);
    }
    if (node.val < val) {
      node.right = this._insert(val, node.right)
    } else if (node.val > val) {
      node.left = this._insert(val, node.left)
    } else;
    return node
  }

  remove(val) {
    this.root = this._remove(val, this.root)
  }

  /**
   * 
   * @param {Number} val 
   * @param {TreeNode} node 
   */
  _remove(val, node) {
    if (node === null) return node
    if (node.val < val) {
      node.right = this._remove(val, node.right);
    } else if (node.val > val) {
      node.left = this._remove(val, node.left);
    } else if (node.left && node.right) {
      node.val = this.findMin(node.right).val;
      node.right = this._remove(node.val, node.right);
    } else {
      return node.left ? node.left : node.right
    }
    return node
  }
}

let bst = new BinarySearchTree();
bst.insert(3);
bst.insert(2);
bst.insert(11);
bst.insert(8);
bst.insert(7);
bst.insert(10);
bst.insert(12);
bst.insert(14);
bst.insert(15);
bst.insert(14);
bst.remove(11)
console.log(bst);




module.exports = BinarySearchTree
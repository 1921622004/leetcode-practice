/**
 *
 * 1. 规则
 *   1. 根结点必须为黑色
 *   2. 不能有R-R的关系
 *   3. 每条到叶子节点的路径必须包含相同的黑色节点树
 * 2. 插入
 *    - 如果根为空，新节点为黑色
 *    - 新节点为红色
 *    - 如果新节点的父节点为黑色，结束
 *    - 叔叔节点为红色，重新上色
 *    - 如果没有叔叔节点或叔叔节点为黑色，进行旋转
 *      - ll r
 *      - lr rl
 *      - rr l
 *      - rl lr
 */

const RedBlackTreeNode = require('./RedBlackTreeNode');
const BLACK = 1;
const RED = 0;

class RedBlackTree {
  constructor() {
    this.root = null;
  }

  /**
   * 
   * @param {number} val 
   * @param {RedBlackTreeNode} node 
   * @return {RedBlackTreeNode}
   */
  _insert(val) {
    let t = this.root;
    let p = null;
    while (t) {
      p = t;
      if (t.val < val) {
        t = t.right;
      } else if (t.val > val) {
        t = t.left;
      } else return;
    }
    let node = new RedBlackTreeNode(val);
    node.parent = p;
    if (p === null) {
      this.root = node;
    } else if (p.val < node.val) {
      p.right = node;
    } else {
      p.left = node;
    }
    node.color = RED;
    this.insertFix(node);
  }

  /**
   * 
   * @param {RedBlackTreeNode} node
   * @param {number} val 
   * @return {boolean}
   */
  _remove(node, val) {
    while (node.val !== val && node) {
      if (node.val > val) {
        node = node.left
      } else {
        node = node.right
      }
    }
    if (node) {
      if (!node.left || !node.right) {
        this._removeAndFix(node);
      } else {
        let minNode = this.findMin(node.right);
        node.val = minNode.val;
        this._remove(node.right, minNode.val);
      }
    } else return false;
    return true
  }

  /**
   * @param {RedBlackTreeNode} node
   */
  _removeAndFix(node) {
    if (node.color === RED) {
      this._removeNode(node);
    } else {
      this._removeFix(node);
    }
  }

  /**
   * 
   * @param {RedBlackTreeNode} node 
   */
  _removeNode(node) {
    if (node === this.root) {
      if (node.left) {
        this.root = node.left;
        node.parent = null;
      } else if (node.right) {
        this.root = node.right;
        node.parent = null;
      } else {
        this.root = null;
      }
    } else {
      if (node.parent.left === node) {
        if (node.left) {
          node.parent.left = node.left;
          node.left.parent = node.parent;
        } else if (node.right) {
          node.parent.left = node.right;
          node.right.parent = node.parent
        } else {
          node.parent.left = null
        }
      } else {
        if (node.left) {
          node.parent.right = node.left;
          node.left.parent = node.parent;
        } else if (node.right) {
          node.parent.right = node.right;
          node.right.parent = node.parent
        } else {
          node.parent.right = null
        }
      }
    }
  }

  /**
   * 
   * @param {RedBlackTreeNode} node 
                                                                                                           */
  _removeFix(node) {
    let nodeRef = node;
    while (node !== this.root && node.color === BLACK) {
      if (node.parent.left === node) {
        let brotherNode = node.parent.right;
        if (brotherNode.color === RED) {
          brotherNode.color = BLACK;
          node.color = BLACK;
          node.parent.color = RED;
          this._rotateLeft(node.parent);
        } else if (
          (!brotherNode.left || brotherNode.left.color === BLACK)
          &&
          (!brotherNode.right || brotherNode.right.color === BLACK)
        ) {
          if (node.parent.color === RED) {
            brotherNode.color = RED;
            node.parent.color = BLACK;
            node = this.root;
          } else {
            brotherNode.color = RED;
            node = node.parent;
          }
        } else if (brotherNode.left.color === RED && brotherNode.right.color === BLACK) {
          this._rotateRight(brotherNode);
          brotherNode.color = RED;
          brotherNode.parent.color = BLACK;
        } else if (brotherNode.right.color === RED) {
          brotherNode.color = node.parent.color;
          node.parent.color = BLACK;
          brotherNode.right.color = BLACK;
          this._rotateLeft(node.parent);
          node = this.root;
        }
      } else {
        let brotherNode = node.parent.left;
        if (brotherNode.color === RED) {
          brotherNode.color = BLACK;
          node.color = BLACK;
          node.parent.color = RED;
          this._rotateRight(node.parent);
        } else if (
          (!brotherNode.left || brotherNode.left.color === BLACK)
          &&
          (!brotherNode.right || brotherNode.right.color === BLACK)
        ) {
          if (node.parent.color === RED) {
            brotherNode.color = RED;
            node.parent.color = BLACK;
            node = this.root;
          } else {
            brotherNode.color = RED;
            node = node.parent;
          }
        } else if (brotherNode.right.color === RED && brotherNode.left.color === BLACK) {
          this._rotateLeft(brotherNode);
          brotherNode.color = RED;
          brotherNode.parent.color = BLACK;
        } else if (brotherNode.left.color === RED) {
          brotherNode.color = node.parent.color;
          node.parent.color = BLACK;
          brotherNode.left.color = BLACK;
          this._rotateRight(node.parent);
          node = this.root;
        }
      }
    }
    node.color = BLACK;
    this._removeNode(nodeRef);
  }

  /**
   * 
   * @param {RedBlackTreeNode} node 
   */
  insertFix(node) {
    while (node.parent && node.parent.color !== BLACK) {
      if (node.parent === node.parent.parent.left) {
        let uncleNode = node.parent.parent.right;
        if (uncleNode && uncleNode.color === RED) {
          node.parent.color = BLACK;
          uncleNode.color = BLACK;
          node.parent.parent.color = RED;
          node = node.parent.parent;
        } else if (node === node.parent.right) {
          node = node.parent;
          this._rotateLeft(node);
        } else {
          node.parent.color = BLACK;
          node.parent.parent.color = RED;
          this._rotateRight(node.parent.parent);
        }
      } else {
        let uncleNode = node.parent.parent.left;
        if (uncleNode && uncleNode.color === RED) {
          node.parent.color = BLACK;
          uncleNode.color = BLACK;
          node.parent.parent.color = RED;
          node = node.parent.parent;
        } else if (node === node.parent.left) {
          node = node.parent;
          this._rotateRight(node);
        } else {
          node.parent.color = BLACK;
          node.parent.parent.color = RED;
          this._rotateLeft(node.parent.parent);
        }
      }
    }
    this.root.color = BLACK;
  }

  /**
   * 
   * @param {RedBlackTreeNode} node 
   * @return {RedBlackTreeNode}
   */
  _rotateLeft(node) {
    let rightNode = node.right;
    let rightNodeLeft = rightNode.left;
    node.right = rightNodeLeft;
    if (rightNodeLeft) rightNodeLeft.parent = node;
    rightNode.left = node;
    if (node.parent) {
      if (node.parent.left === node) {
        node.parent.left = rightNode;
      } else {
        node.parent.right = rightNode;
      }
      rightNode.parent = node.parent;
    } else {
      this.root = rightNode;
      rightNode.parent = null;
    }
    node.parent = rightNode;
  }

  /**
   * 
   * @param {RedBlackTreeNode} node 
   * @return {RedBlackTreeNode}
   */
  _rotateRight(node) {
    let leftNode = node.left;
    let leftNodeRight = leftNode.right;
    node.left = leftNodeRight;
    if (leftNodeRight) leftNodeRight.parent = node;
    leftNode.right = node;
    if (node.parent) {
      if (node.parent.left === node) {
        node.parent.left = leftNode;
      } else {
        node.parent.right = leftNode;
      }
      leftNode.parent = node.parent;
    } else {
      this.root = leftNode;
      leftNode.parent = null;
    }
    node.parent = leftNode;
  }

  /**
   * @param {RedBlackTreeNode} node
   * @return {RedBlackTreeNode}
   */
  findMin(node) {
    if (node.left) {
      return this.findMin(node.left)
    } else return node
  }

  /**
   * 
   * @param {number} val 
   */
  insert(val) {
    this._insert(val);
  }

  /**
   * 
   * @param {number} val 
   * @return {boolean}
   */
  remove(val) {
    this._remove(this.root, val);
  }

}

const t = new RedBlackTree();
t.insert(1);
t.insert(13);
t.insert(5);
t.insert(11);
t.insert(2);
t.insert(14);
t.insert(15);
t.insert(7);
t.insert(8);

t.remove(13);

const t2 = new RedBlackTree();
t2.insert(41);
t2.insert(38);
t2.insert(31);
t2.insert(12);
t2.insert(19);
t2.insert(8);

t2.remove(8);
t2.remove(19);
t2.remove(12);
t2.remove(31);
t2.remove(38);
t2.remove(41);

module.exports = RedBlackTree;
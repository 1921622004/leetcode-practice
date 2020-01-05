/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU缓存机制
 */

// @lc code=start
var LinkedListNode = function (val, key) {
  this.val = val;
  this.key = key;
  this.prev = null;
  this.next = null;
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.map = new Map();
  this.head = new LinkedListNode();
  this.tail = new LinkedListNode();
  this.head.next = this.tail;
  this.tail.prev = this.head;
  this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  let node = this.map.get(key);
  if (!node) return -1;
  this.removeNode(node);
  this.addNodeToHead(node);
  return node.val
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  let prev = this.map.get(key);
  if (prev) {
    if (prev.val !== value) {
      this.removeNode(prev);
      prev.val = value;
      this.addNodeToHead(prev);
    }
  } else {
    let node = new LinkedListNode(value, key);
    this.addNodeToHead(node);
    this.map.set(key, node);
    this.capacity--;
    if (this.capacity < 0) {
      this.removeTail();
      this.capacity++;
    }
  }
};

LRUCache.prototype.addNodeToHead = function (node) {
  node.next = this.head.next;
  node.prev = this.head;
  this.head.next && (this.head.next.prev = node);
  this.head.next = node;
}

LRUCache.prototype.removeTail = function () {
  const prev = this.tail.prev;
  this.tail.prev = prev.prev;
  prev.prev.next = this.tail;
  this.map.delete(prev.key);
  // this.removeNode(prev);
}

/**
 * @param {LinkedListNode} node
 */
LRUCache.prototype.removeNode = function (node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

// let cache = new LRUCache(2);

// console.log(cache.put(2, 1));
// console.log(cache.put(1, 1));
// console.log(cache.put(2, 3));
// console.log(cache.put(4, 1));
// console.log(cache.get(1));
// console.log(cache.get(2));

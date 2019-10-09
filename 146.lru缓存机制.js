/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.count = 0;
  this.map = {};
  this.head = null;
  this.tail = null;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  console.log(this);
  if (!this.map[key]) return -1;
  const { prev, next } = this.map[key];
  if (this.map[key] === this.head) return this.head.value;
  if (this.map[key] === this.tail) {
    // 如果当前选择的节点是尾节点
    this.tail = this.tail.prev;
    this.tail.next = null;
    this.map[key].next = this.head;
    this.head.prev = this.map[key];
    this.head = this.map[key];
    this.head.prev = null;
    return this.map[key].value
  }
  if (prev) {
    prev.next.next = next ? next.next : null;
  }
  this.map[key].next = this.head;
  this.head = this.map[key];
  this.head.prev = null;
  return this.map[key].value
  // 将当前节点移到头部 
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  console.log(this);
  if (this.head) {
    if (this.count >= this.capacity) {
      const { prev, key } = this.tail;
      if (prev) prev.next = null;
      this.tail = prev;
      delete this.map[key];
      this.count--;
    }
    let temp = this.head;
    this.map[key] = this.head = {
      key, value, prev: null, next: this.head
    }
    temp.prev = this.head;
    this.count++;
  } else {
    // 存到hashmap 记录头节点， 尾节点
    this.map[key] = this.head = this.tail = {
      key,
      value,
      prev: null,
      next: null
    };
    this.count++;
  }

};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

let cache = new LRUCache( 1 /* 缓存容量 */ );

console.log(cache.put(2,1))
console.log(cache.get(2))
console.log(cache.put(3,2))
console.log(cache.get(2))
console.log(cache.get(3))
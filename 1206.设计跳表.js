function SkipListNode(val = null, maxLevel = 0) {
  this.val = val;
  this.maxLevel = maxLevel;
  this.forward = [];
}

const MAX_LEVEL = 16;

var Skiplist = function() {
    this.head = new SkipListNode();
    this.levelCount = 0;
};

/** 
 * @param {number} target
 * @return {boolean}
 */
Skiplist.prototype.search = function(val) {
   let cur = this.head;
    for (let i = this.levelCount - 1; i > -1; i--) {
      while (cur.forward[i] !== undefined && cur.forward[i].val < val) {
        cur = cur.forward[i]
      }
    }
    return cur.forward[0] !== undefined && cur.forward[0].val === val
};

/** 
 * @param {number} num
 * @return {void}
 */
Skiplist.prototype.add = function(val) {
    let randomLevel = this.randomLevel();
    let newNode = new SkipListNode(val, randomLevel);
    let nodesNeedUpdate = [];
    let cur = this.head;
    for (let i = randomLevel - 1; i > -1; i--) {
      while (cur.forward[i] !== undefined && cur.forward[i].val < val) {
        cur = cur.forward[i]
      }
      nodesNeedUpdate[i] = cur;
    }
    for (let i = 0; i < randomLevel; i++) {
      newNode.forward[i] = nodesNeedUpdate[i].forward[i];
      nodesNeedUpdate[i].forward[i] = newNode;
    }
    if (randomLevel > this.levelCount) this.levelCount++;
};

/** 
 * @param {number} num
 * @return {boolean}
 */
Skiplist.prototype.erase = function(val) {
    let cur = this.head;
    let nodesNeedUpdate = [];
    for (let i = this.levelCount - 1; i > -1; i--) {
      while (cur.forward[i] !== undefined && cur.forward[i].val < val) {
        cur = cur.forward[i]
      }
      nodesNeedUpdate[i] = cur
    }
    if (cur.forward[0] !== undefined && cur.forward[0].val === val) {
      for (let i = this.levelCount - 1; i > -1; i--) {
        if (cur.forward[i] !== undefined && cur.forward[i].val === val) {
          nodesNeedUpdate[i].forward[i] = cur.forward[i].forward[i];
        }
      }
      return true
    }
    return false
}
/**
   * @returns {number}
   */
Skiplist.prototype.randomLevel = function() {
    let level = 1;
    for (let i = 0; i <= MAX_LEVEL; i++) {
      if (Math.random() < 0.5) {
        level++
      }
    }
    return level
  }

/** 
 * Your Skiplist object will be instantiated and called as such:
 * var obj = new Skiplist()
 * var param_1 = obj.search(target)
 * obj.add(num)
 * var param_3 = obj.erase(num)
 */